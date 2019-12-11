<template>
    <div class="container">
        <div class="row">
            <div class="col bg-light" id="sidebar">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-home"></i> <span class="d-none d-sm-inline">Overview</span></a>
                    </li>
                    <li class="nav-item"><a class="nav-link text-truncate" href="#"><i class="fa fa-bar-chart"></i> <span class="d-none d-sm-inline">Analytics</span></a></li>
                    <li class="nav-item"><a class="nav-link text-truncate" href="#"><i class="fa fa-download"></i> <span class="d-none d-sm-inline">Export</span></a></li>
                </ul>
            </div>
            <div class="col-10">
                <slide/>
            </div>
        </div>

    </div>
</template>
   
<script>
  import slide from './slide.vue'
  export default {
      components: {
          slide
      }
  }
</script>

<style scoped>
    #sidebar ul li{
        text-align: center;
        background-color:red; 
        width: 100%;
    }
</style>