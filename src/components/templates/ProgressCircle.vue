<template>
  <div class="progreessContainer">
    <div  class="progressCircle">
      <svg class="progressRing" :height="diameter" :width="diameter">
        <circle
          class="meter"
          fill="transparent"
          :stroke-width="stroke"
          :cx="diameter / 2"
          :cy="diameter / 2"
          :r="getRadius()"
        />
        <circle
          class="circle"
          fill="transparent"
          :stroke-width="stroke"
          :cx="diameter / 2"
          :cy="diameter / 2"
          :r="getRadius()"
        />
        
      </svg>
      <div class="numberProgressContainer">
          <p class="numberProgress">{{ progress }}%</p>
      </div>
    </div>
    <div class="progressSubtitleContainer">
      <p class="progressSubtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: Number,
    stroke: Number,
    diameter: Number,
    subtitle: String
  },
  data() {
    return {
      props: this.$props,
      circle: Object,
      radius: Number,
      circumference: Number,
    };
  },
  methods: {
    getRadius() {
      return this.props.diameter / 2 - this.props.stroke * 2;
    },
    getCircumference() {
      return this.radius * 2 * Math.PI;
    },
    setCircumference(circumference) {
      this.circle.style.strokeDasharray = `${circumference} ${circumference}`;
      this.circle.style.strokeDashoffset = circumference;
    },
    setProgress(percent) {
      const offset = this.circumference - (percent / 100) * this.circumference;
      this.circle.style.strokeDashoffset = offset;
    }
  },
  mounted() {
    const progreessContainer = this.$el.children[0]
    progreessContainer.style.height = `${this.props.diameter}px`
    progreessContainer.style.width = `${this.props.diameter}px`
    this.circle = this.$el.children[0].children[0].children[1]
    this.radius = this.getRadius();
    this.circumference = this.getCircumference();
    this.setCircumference(this.circumference);
    this.setProgress(this.props.progress);
  },
};
</script>

<style>
.progressCircle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.progressRing {
  position: absolute;
}

.progressRing .circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
  stroke-linecap: round;
  stroke: #4169e1;
}

.progressRing .meter {
  stroke: #2344a5b7;
}

.numberProgressContainer .numberProgress{
  color: white;
  font-family: "JetBrainsMono";
  font-size: 2rem;
}

.progressSubtitleContainer {
  display: flex;
  justify-content: center;
}

.progressSubtitleContainer .progressSubtitle {
   color: white;
  font-family: "JetBrainsMono";
  font-size: 1.4rem;
}
</style>