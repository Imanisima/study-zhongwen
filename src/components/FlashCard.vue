<template>
  <div
    class="flashcard"
    v-on:click="flip()"
    :style="{ cursor: flipped ? 'default' : 'pointer' }"
    title="Click anywhere to reveal"
  >

    <div class="answer">
      <slot v-if="flipped" name="answer"></slot>
      <br />
      <p v-show="flipped">
        <span class="question">{{ question }}</span>
        <v-spacer />

        <span class="answer">{{ answer }} </span>
        <v-img class="white--text align-end" height="55vh" :src="image">
        </v-img>

        <br />

        <span class="tip"
          >Ex:
          <v-spacer />
          <span class="notes">{{ notes }}</span>
        </span>
      </p>

      <div v-show="!flipped" class="question">{{ question }}</div>
    </div>

    <div class="progress-bar">
      <div
        class="progress-bar-fill"
        :style="{ width: '' + level / 0.11 + '%' }"
      >
        <v-progress-linear buffer-value="0" stream color="purple" />
      </div>
    </div>

    <div
      :style="{ visibility: flipped ? 'visible' : 'hidden' }"
      class="actions"
    >
      <button
        v-if="answered == null"
        v-on:click.stop="recall('forgot')"
        class="forgotbutton"
        title="Your guess was incorrect!"
      >
        Forgot <i class="mdi mdi-window-close" />
      </button>

      <button
        v-if="answered == null"
        v-on:click.stop="recall('recalled')"
        class="recalledbutton"
        title="You guessed correct!"
      >
        Guessed Right <i class="mdi mdi-check" />
      </button>
    </div>

    <button v-if="debug === 'on'" v-on:click.stop="reset()" class="resetbutton">
      Reset
    </button>
  </div>
</template>

<script>
export default {
  props: {
    qid: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    notes: {
      type: String,
      required: false,
    },
    answer: {
      type: String,
      required: true,
    },
    flipped: {
      type: Boolean,
      required: true,
      default: false,
    },
    answered: {
      // step-2 to step-3. Value is forgot|recalled
      type: String,
      required: false,
    },
    timeunit: {
      type: String,
      required: true,
      default: "days",
    },
    debug: {
      type: String,
      required: false, // default will be taken as false
    },
  },
  data: function () {
    var level_string = window.localStorage.getItem(this.qid + "_level");
    return {
      level: level_string ? parseInt(level_string, 10) : null,
      practice_timestamp: window.localStorage.getItem(this.qid + "_pts"),
      success_timestamp: window.localStorage.getItem(this.qid + "_sts"),
    };
  },
  methods: {
    flip: function () {
      if (this.flipped) return; //already flipped. Do nothing.
      // set last_practiced_timestamp
      var current_date = new Date();
      window.localStorage.setItem(
        this.qid + "_pts",
        current_date.toISOString()
      );
      this.practice_timestamp = current_date.toISOString();
      if (this.level == null) {
        // initialize level
        window.localStorage.setItem(this.qid + "_level", 0);
        this.level = 0;
      }
      this.$emit("flipped", this.qid, true);
    },
    reset: function () {
      this.flipped = false;
      window.localStorage.removeItem(this.qid + "_level");
      this.level = null;
      window.localStorage.removeItem(this.qid + "_pts");
      this.practice_timestamp = null;
      window.localStorage.removeItem(this.qid + "_sts");
      this.success_timestamp = null;
    },
    recall: function (value) {
      // value is either forgot or recalled
      var current_date = new Date();
      if (value === "recalled") {
        // check current date with last_success_timestamp
        // if the diff is more than 2^level days and value = 'recalled'
        // then increase level by 1 with max = 10 which is long-term
        // can be null but new Date(null) gives unix epoch which is perfect
        var previous_ts = window.localStorage.getItem(this.qid + "_sts");
        var previous_date = new Date(previous_ts);
        var timefactor = this.timeunit === "seconds" ? 1 : 3600 * 24; //seconds
        var diff_in_days = Math.floor(
          (current_date.getTime() - previous_date.getTime()) /
            (1000.0 * timefactor)
        );
        if (diff_in_days > Math.pow(2, this.level)) {
          // increment level
          this.level = Math.min(this.level + 1, 10);
          window.localStorage.setItem(this.qid + "_level", this.level);
          //alert("You reached level: " + this.level);
          // if (this.level === 11) alert("Congrats! You reached level 11! :-)");
        }
        // set last_success_timestamp. pracetice_timestamp was already set in flip()
        window.localStorage.setItem(
          this.qid + "_sts",
          current_date.toISOString()
        );
        this.success_timestamp = current_date.toISOString();
      } else {
        // Decrement level or reset all the way to 1
        this.level = 0; // Math.max(1, this.level - 1);
        window.localStorage.setItem(this.qid + "_level", this.level);
      }
      this.$emit("answered", this.qid, value);
    },
  },
  computed: {
    levelLabel: function () {
      return [
        "You will see this card again tomorrow!",
        "You will see this card again in 2 days!",
        "You will see this card again in 4 days!",
        "You will see this card again in 8 days!",
        "You will see this card again in 16 days!",
        "You will see this card again in a month!",
        "You will see this card again in 2 months!",
        "You will see this card again in 4 months!",
        "You will see this card again in 8 months!",
        "You will see this card again in 16 months!",
        "😎🎉🤸🏻 No need to see this card again! 🤸🏻🎉😎",
      ][this.level];
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
.flashcard {
  display: block;
  margin: 0 16px;
  border-radius: 3px;
  color: #222;
  background-color: white;
  border: 2px solid rgb(202, 123, 136);
  box-shadow: 3px 3px 20px rgb(238, 117, 117);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
}

.flashcard:hover {
  border: 2px solid purple;
}

.question {
  padding: 12px;
  font-weight: bold;
  font-size: 1.5em;
  border-bottom: 2px;
  border-bottom: 1px solid #f6f0ff;
  text-align: center;
  margin-top: -10px;
  padding-top: 60px;
  padding-bottom: 60px;
  text-transform: uppercase;
  font-family: "Abel", sans-serif;
}
.answer {
  padding: 12px;
  background-color: #fcfaff;
  /* font-weight: bold; */
  font-size: 2em;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 40px;
  min-height: 200px;
  vertical-align: middle;
  text-transform: capitalize;
  font-family: "Abel", sans-serif;
}
.tip {
  color: rgb(49, 48, 48);
  font-weight: normal;
}
.notes {
  color: #242424;
  font-weight: bold;
  font-size: 2em;
}

.message {
  font-size: 14px;
  text-align: center;
  font-family: "Abel", sans-serif;
}
.actions {
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  margin-bottom: 10px;
}
button {
  display: inline-block;
  width: 40%;
  font-weight: bold;
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  font-family: "Abel", sans-serif;
}
button:hover {
  opacity: 1;
  font-weight: bold;
}
button.forgotbutton {
  background-color: #f56565;
  color: #742a2a;
  text-transform: uppercase;
}
button.recalledbutton {
  background-color: #48bb78;
  color: #22543d;
  text-transform: uppercase;
}
button.resetbutton {
  width: 98%;
  background-color: #cbd5e0;
  color: "black";
  text-transform: uppercase;
}
div.debug-message {
  text-align: center;
  font-family: "Abel", sans-serif;
}
.progress-bar {
  width: 100%;
  background-color: #fafcfa;
  padding: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);
  position: relative;
}
.progress-bar-fill {
  display: block;
  height: 22px;
  background-color: #f0ddee;
  border-radius: 3px;
  transition: width 500ms ease-in-out;
}
.progress-bar-label {
  position: absolute;
  z-index: 2;
  font-weight: bold;
  color: black; /* Change according to needs */
  text-align: center;
  background-color: transparent;
  width: 100%;
  font-family: "Abel", sans-serif;
}
</style>