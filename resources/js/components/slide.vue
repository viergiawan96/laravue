<template>
    <div class="slide">
        <div id="carouselExampleFade" class="carousel slide carousel-fade slick1" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-delay="0">
                    <img img alt="slide vue" src="../../../public/img/slide-05.jpg">
                </div>
                <div class="carousel-item" data-delay="0">
                    <img img alt="slide vue" src="../../../public/img/slide-06.jpg">
                </div>
                <div class="carousel-item" data-delay="0">
                    <img img alt="slide vue" src="../../../public/img/slide-07.jpg">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>


<style scoped>

.slide img{
    width: 100%;
    height: calc(100vh - 90px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

</style>