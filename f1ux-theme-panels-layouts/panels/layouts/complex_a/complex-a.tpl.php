<?php
  $main = (empty($content['main']) ? 'main-empty' : 'main');
  $main_sidebar = (empty($content['main_sidebar']) ? 'main-sidebar-empty' : 'main-sidebar');
  $intro_first = (empty($content['intro_first']) ? 'intro-first-empty' : 'intro-first');
  $intro_second = (empty($content['intro_second']) ? 'intro-second-empty' : 'intro-second');
  $intro_third = (empty($content['intro_third']) ? 'intro-third-empty' : 'intro-third');
  $bottom_sidebar = (empty($content['bottom_sidebar']) ? 'bottom-sidebar-empty' : 'bottom-sidebar');
  $bottom = (empty($content['bottom']) ? 'bottom-empty' : 'bottom');

  $classes = "$main $main_sidebar $intro_first $intro_second $intro_third $bottom_sidebar $bottom";
?>

<div<?php if (!empty($css_id)): ?> id="<?php print $css_id; ?>"<?php endif; ?> class="l-panels-complex-a <?php print $classes; ?>">
  <?php if (!empty($content['main']) || !empty($content['main_sidebar'])): ?>
    <div class="l-wrapper">
      <?php if (!empty($content['main'])): ?>
        <div class="l-main">
          <?php print $content['main']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['main_sidebar'])): ?>
        <aside class="l-main-sidebar">
          <?php print $content['main_sidebar']; ?>
        </aside>
      <?php endif; ?>
    </div>
  <?php endif; ?>
  <?php if (!empty($content['intro_first']) || !empty($content['intro_second']) || !empty($content['intro_third'])): ?>
    <div class="l-wrapper">
      <?php if (!empty($content['intro_first'])): ?>
        <div class="l-intro-first">
          <?php print $content['intro_first']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['intro_second'])): ?>
        <div class="l-intro-second">
          <?php print $content['intro_second']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['intro_third'])): ?>
        <div class="l-intro-third">
          <?php print $content['intro_third']; ?>
        </div>
      <?php endif; ?>
    </div>
  <?php endif; ?>
  <?php if (!empty($content['bottom_sidebar']) || !empty($content['bottom'])): ?>
    <div class="l-wrapper">
      <?php if (!empty($content['bottom_sidebar'])): ?>
        <div class="l-bottom-sidebar">
          <?php print $content['bottom_sidebar']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['bottom'])): ?>
        <div class="l-bottom">
          <?php print $content['bottom']; ?>
        </div>
      <?php endif; ?>
    </div>
  <?php endif; ?>
</div>

