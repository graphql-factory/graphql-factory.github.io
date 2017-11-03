<template lang="pug">
  span.github-btn(ref="github-btn", :class="config.className")
    a.gh-btn(ref="gh-btn", :href="config.buttonHref", target="_blank", aria-label="", :class="!flat ? 'gh-btn-gradient' : ''")
      span.gh-ico(aria-hidden="true")
      span.gh-text(ref="gh-text", v-text="config.text", :aria-label="config.label")
    a.gh-count(v-if="count", ref="gh-count", href="config.counterHref", target="_blank", aria-label="")
</template>

<script type="text/babel">
  /*
   * https://github.com/mdo/github-buttons/blob/master/github-btn.html
   * Translated into a vue.js component
   */
  export default {
    props: {
      user: {
        type: String,
        required: true
      },
      repo: String,
      type: {
        type: String,
        required: true
      },
      count: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ''
      },
      flat: {
        type: Boolean,
        default: false
      },
      text: String
    },
    computed: {
      config () {
        switch (this.type) {
          case 'star':
            return {
              className: 'github-stargazers',
              text: this.text || 'Star',
              label: 'Star on GitHub',
              buttonHref: `https://github.com/${this.user}/${this.repo}/stargazers`,
              counterHref: ''
            }
          case 'fork':
            return {
              className: 'github-forks',
              text: this.text || 'Fork',
              label: 'Fork on GitHub',
              buttonHref: `https://github.com/${this.user}/${this.repo}/fork`,
              counterHref: `https://github.com/${this.user}/${this.repo}/network`
            }
          case 'follow':
            return {
              className: 'github-me',
              text: this.text || `Follow @${this.user}`,
              label: `Follow @${this.user} on GitHub`,
              buttonHref: `https://github.com/${this.user}`,
              counterHref: `https://github.com/${this.user}/followers`
            }
          default:
            return {
              className: '',
              text: this.text || '',
              label: '',
              buttonHref: `https://github.com/${this.user}/${this.repo}/`.replace(/\/\/$/, '/'),
              counterHref: ''
            }
        }
      }
    }
  }
</script>

<style scoped>
  .github-btn {
    font: 700 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: 20px;
    overflow: hidden
  }

  .gh-btn,
  .gh-count,
  .gh-ico {
    float: left
  }

  .gh-btn,
  .gh-count {
    padding: 2px 5px 2px 4px;
    color: #333;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 3px
  }

  .gh-btn-gradient {
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fcfcfc), color-stop(100%, #eee));
    background-image: -webkit-linear-gradient(top, #fcfcfc 0, #eee 100%);
    background-image: -moz-linear-gradient(top, #fcfcfc 0, #eee 100%);
    background-image: -ms-linear-gradient(top, #fcfcfc 0, #eee 100%);
    background-image: -o-linear-gradient(top, #fcfcfc 0, #eee 100%);
    background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#eeeeee', GradientType=0);
    background-repeat: no-repeat;
  }

  .gh-btn {
    background-color: #fcfcfc;
    border: 1px solid #d5d5d5
  }

  .gh-btn:focus,
  .gh-btn:hover {
    text-decoration: none;
    background-color: #ddd;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #eee), color-stop(100%, #ddd));
    background-image: -webkit-linear-gradient(top, #eee 0, #ddd 100%);
    background-image: -moz-linear-gradient(top, #eee 0, #ddd 100%);
    background-image: -ms-linear-gradient(top, #eee 0, #ddd 100%);
    background-image: -o-linear-gradient(top, #eee 0, #ddd 100%);
    background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dddddd', GradientType=0);
    border-color: #ccc
  }

  .gh-btn:active {
    background-image: none;
    background-color: #dcdcdc;
    border-color: #b5b5b5;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, .15)
  }

  .gh-ico {
    width: 14px;
    height: 14px;
    margin-right: 4px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=);
    background-size: 100% 100%;
    background-repeat: no-repeat
  }

  .gh-count {
    position: relative;
    display: none;
    margin-left: 4px;
    background-color: #fafafa;
    border: 1px solid #d4d4d4
  }

  .gh-count:focus,
  .gh-count:hover {
    color: #4183C4
  }

  .gh-count:after,
  .gh-count:before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid
  }

  .gh-count:before {
    top: 50%;
    left: -3px;
    margin-top: -4px;
    border-width: 4px 4px 4px 0;
    border-right-color: #fafafa
  }

  .gh-count:after {
    top: 50%;
    left: -4px;
    z-index: -1;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #d4d4d4
  }

  .github-btn-large {
    height: 30px
  }

  .github-btn-large .gh-btn,
  .github-btn-large .gh-count {
    padding: 3px 10px 3px 8px;
    font-size: 16px;
    line-height: 22px;
    border-radius: 4px
  }

  .github-btn-large .gh-ico {
    width: 20px;
    height: 20px
  }

  .github-btn-large .gh-count {
    margin-left: 6px
  }

  .github-btn-large .gh-count:before {
    left: -5px;
    margin-top: -6px;
    border-width: 6px 6px 6px 0
  }

  .github-btn-large .gh-count:after {
    left: -6px;
    margin-top: -7px;
    border-width: 7px 7px 7px 0
  }
</style>