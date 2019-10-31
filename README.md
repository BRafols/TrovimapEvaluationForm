# vue-trovimap-wizard

A Vue component for inputting Naira-formatted amounts.

## Installation

```js
npm i -S vue-trovimap-wizard
```

### Browser

```html
<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="https://unpkg.com/vue-trovimap-wizard"></script>
<script type="text/javascript">
  Vue.use(TrovimapWizard);
</script>
```

### Module

```js
import TrovimapWizard from 'vue-trovimap-wizard';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<naira-input ref="TrovimapWizard" :initial-amount="initialAmount" v-model="amount" />
```

Or to style as a Bootstrap input:

```html
<naira-input class="form-control" ref="TrovimapWizard" :initial-amount="initialAmount" v-model="amount" />
```

To clear the input, call:
```js
this.$refs.TrovimapWizard.clear();
```
