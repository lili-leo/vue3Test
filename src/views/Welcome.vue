<template>
  <div class="site-content ">
    
  </div>
</template>

<script>
export default {};
</script>

<style>
#myNavbar {
  background: #2095f3;
}
.site-content {
  display: flex;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: #1877d3;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#1877d3),
    to(#03a9f4)
  );
  background: linear-gradient(to bottom, #1877d3 0, #03a9f4 100%);
  background-color: #2095f3;
  color: #fff;
}
.home-header-entry{
    width: 500px;
    margin-left: 200px;
}
.home-header-entry__title{
  margin-bottom: 50px;
  font-size: 40px;
}
.dhx-3d-container {
  position: absolute;
  right: 0px;
  top: 50px;
  width: 1213px;
  height: 949px;
  margin: 0 auto;
  z-index: 10;
}
.h-level {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 2s ease;
  transition: all 2s ease;
}
</style>
