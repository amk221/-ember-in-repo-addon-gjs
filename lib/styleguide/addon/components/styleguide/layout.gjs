<template>
  <div class="styleguide-layout">
    <div class="styleguide-layout__left">
      {{yield to="left"}}
    </div>
    <div class="styleguide-layout__right">
      {{yield to="right"}}
    </div>
  </div>
</template>