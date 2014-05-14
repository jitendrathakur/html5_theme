<?php
include 'header.php';
?>
<body>
    <?php
    include 'top_header.php';
    include 'nav_bar.php';
    include 'slider.php';
    ?>
    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->
    <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="services-cont">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class='primary-headline'>Loreum ipsum de</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 text-center">
                    <div class="service-tab-in">
                        <i class="fa fa-mobile fa-8x"></i>
                        <h2 id='digit-t-1'>Mobile-first</h2>
                        <p>Tablets, phones, laptops. The new 3 promises to be mobile friendly from the start.</p>
                        <div class="overlay-service">
                            <a class="btn btn-primary icon-sl-link btn-lg" href="#"><i class="fa fa-link fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <div class="service-tab-in">
                        <i class="fa fa-gears fa-8x"></i>
                        <h2 id='digit-t-2'>One Fluid Grid</h2>
                        <p>There is now just one percentage-based grid for Bootstrap 3. Customize for fixed widths.</p>
                        <div class="overlay-service">
                            <a class="btn btn-primary icon-sl-link btn-lg" href="#"><i class="fa fa-link fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <div class="service-tab-in">
                        <i class="fa fa-lock fa-8x"></i>
                        <h2 id='digit-t-3'>LESS is More</h2>
                        <p>Improved support for mixins make the new Bootstrap 3 easier to customize.</p>
                        <div class="overlay-service">
                            <a class="btn btn-primary icon-sl-link btn-lg" href="#"><i class="fa fa-link fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- /.row -->

        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider">

        <div class="featurette">
            <div class="col-md-4 featurette-i-co">
                <i class="fa fa-lock featurette-fa"></i>
            </div>
            <div class="col-md-8">
                <h2 class="featurette-heading">Responsive Design. <span class="text-muted">It'll blow your mind.</span></h2>
                <p class="lead">In simple terms, a responsive web design figures out what resolution of device it's being served on. Flexible grids then size correctly to fit the screen.</p>
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="featurette">
            <div class="col-md-8">
                <h2 class="featurette-heading">Responsive Design. <span class="text-muted">It'll blow your mind.</span></h2>
                <p class="lead">In simple terms, a responsive web design figures out what resolution of device it's being served on. Flexible grids then size correctly to fit the screen.</p>
            </div>
            <div class="col-md-4 featurette-i-co">
                <i class="fa fa-lock featurette-fa"></i>
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="featurette">
            <div class="col-md-4 featurette-i-co">
                <i class="fa fa-lock featurette-fa"></i>
            </div>
            <div class="col-md-8">
                <h2 class="featurette-heading">Responsive Design. <span class="text-muted">It'll blow your mind.</span></h2>
                <p class="lead">In simple terms, a responsive web design figures out what resolution of device it's being served on. Flexible grids then size correctly to fit the screen.</p>
            </div>

        </div>
        <hr class="featurette-divider">
        <?php
        //include 'carousel.php';
        ?>
    </div><!-- /.container -->
        <?php
        include 'footer.php';
        ?>