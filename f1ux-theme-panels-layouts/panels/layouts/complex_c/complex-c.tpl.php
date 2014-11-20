<?php
  $top = (empty($content['top']) ? 'top-empty' : 'top');
  $main_first = (empty($content['main_first']) ? 'main-first-empty' : 'main-first');
  $main_second = (empty($content['main_second']) ? 'main-second-empty' : 'main-second');
  $main_third = (empty($content['main_third']) ? 'main-third-empty' : 'main-third');
  $first = (empty($content['first']) ? 'first-empty' : 'first');
  $second = (empty($content['second']) ? 'second-empty' : 'second');
  $bottom_first = (empty($content['bottom_first']) ? 'bottom-first-empty' : 'bottom-first');
  $bottom_second = (empty($content['bottom_second']) ? 'bottom-second-empty' : 'bottom-second');
  
  $classes = "$top $main_first $main_second $main_third $first $second $bottom_first $bottom_second";
?>

<div<?php if (!empty($css_id)): ?> id="<?php print $css_id; ?>"<?php endif; ?> class="l-panels-complex-c <?php print $classes; ?>">
  <?php if (!empty($content['top'])): ?>
    <div class="l-top">
      <?php print $content['top']; ?>
    </div>
  <?php endif; ?>
  <?php if (!empty($content['main_first']) || !empty($content['main_second']) || !empty($content['main_third'])): ?>
    <div class="l-wrapper">
      <?php if (!empty($content['main_first'])): ?>
        <div class="l-main-first">
          <?php print $content['main_first']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['main_second'])): ?>
        <div class="l-main-second">
          <?php print $content['main_second']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['main_third'])): ?>
        <div class="l-main-third">
          <?php print $content['main_third']; ?>
        </div>
      <?php endif; ?>
    </div>
  <?php endif; ?>
  <?php if (!empty($content['first']) || !empty($content['second'])): ?>
    <div class="l-wrapper">
      <?php if (!empty($content['first'])): ?>
        <div class="l-first">
          <?php print $content['first']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['second'])): ?>
        <div class="l-second">
          <?php print $content['second']; ?>
        </div>
      <?php endif; ?>
    </div>
  <?php endif; ?>
  <?php if (!empty($content['bottom_first']) || !empty($content['bottom_second'])): ?>
    <div class="l-wrapper">
      <?php if (!empty($content['bottom_first'])): ?>
        <div class="l-bottom-first">
          <?php print $content['bottom_first']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['bottom_second'])): ?>
        <div class="l-bottom-second">
          <?php print $content['bottom_second']; ?>
        </div>
      <?php endif; ?>
    </div>
  <?php endif; ?>  
</div>


