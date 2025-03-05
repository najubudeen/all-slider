<div <?php echo get_block_wrapper_attributes(); ?>>
  <?php
  // The Query
  $jQuerysports_query = new WP_Query(
    array(
      'category_name' => 'Test',
      'post_type'     => 'post',
      'post_status'   => 'publish'
    )
  );

  //  $sliderWidth = !isset($attributes['sliderWidth']) || empty($attributes['sliderWidth']) ? $sliderWidth = '100':$sliderWidth = $attributes['sliderWidth'];
  $sliderWidth = $attributes['sliderWidth'];
  $sliderHeight = $attributes['sliderHeight'];
  ?>

  <div class="slider">
    <div class="slides">
      <?php
      if ($jQuerysports_query->have_posts()) :
        while ($jQuerysports_query->have_posts()) : $jQuerysports_query->the_post(); ?>
          <?php
          $post_id = get_the_ID();
          $metabox_value = get_post_meta($post_id, '_custom_metabox_key', true);
          ?>
            <?php
            $post_id = get_the_ID();
            $featured_image_id = get_post_thumbnail_id($post_id);
            $featured_image_url = wp_get_attachment_image_src($featured_image_id, 'full')[0];
            ?>
            <div class="slide">
              <img src="<?php echo $featured_image_url; ?>" alt="Image 1">
              <div class="caption">
                <div class="title" style=""><?php the_title(); ?></div>
                <div class="line">
                  <h5><?php echo esc_html($metabox_value); ?></h5>
                </div>
                <div class="line">
                  <?php the_excerpt(); ?>
                </div>
              </div>
            </div>
        <?php endwhile;
      else : ?>
        <p><?php echo _e('No posts found in the Sports category.', 'textdomain'); ?></p>
      <?php endif;
      wp_reset_postdata();
      ?>
    </div>
    <div class="navigation">
      <button class="prev">&#10094;</button>
      <button class="next">&#10095;</button>
    </div>
  </div>


  <script type="text/javascript">
    const slides = document.querySelector('.slides');
        const slide = document.querySelectorAll('.slide');
        let index = 0;
        let autoPlayInterval;

        const updateSlidePosition = () => {
            slides.style.transform = `translateX(-${index * 100}%)`;
        };

        const autoPlay = () => {
            index = (index + 1) % slide.length;
            updateSlidePosition();
        };

        document.querySelector('.next').addEventListener('click', () => {
            index = (index + 1) % slide.length;
            updateSlidePosition();
            resetAutoPlay();
        });

        document.querySelector('.prev').addEventListener('click', () => {
            index = (index - 1 + slide.length) % slide.length;
            updateSlidePosition();
            resetAutoPlay();
        });

        const resetAutoPlay = () => {
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(autoPlay, 3000); // Change image every 3 seconds
        };

        // Start auto play
        autoPlayInterval = setInterval(autoPlay, 3000);
  </script>
</div>