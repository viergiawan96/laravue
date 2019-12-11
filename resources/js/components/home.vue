<template>
    <div class="container">
        <div class="row">
            <div class="col collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100" id="sidebar">
                <ul class="nav flex-column flex-nowrap overflow-hidden">
                    <li class="nav-item">
                        <a class="nav-link text-truncate" href="#"><i class="fa fa-home"></i> <span class="d-none d-sm-inline">Overview</span></a>
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
    #sidebar li{
        text-align: center;
    }
</style>