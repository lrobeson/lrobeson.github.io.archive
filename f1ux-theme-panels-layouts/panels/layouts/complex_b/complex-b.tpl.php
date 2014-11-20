<?php
$main = (empty($content['main']) ? 'main-empty' : 'main');
$main_sidebar = (empty($content['main_sidebar']) ? 'main-sidebar-empty' : 'main-sidebar');
$intro = (empty($content['intro']) ? 'intro-empty' : 'intro');
$bottom_sidebar = (empty($content['bottom_sidebar']) ? 'bottom-sidebar-empty' : 'bottom-sidebar');
$bottom = (empty($content['bottom']) ? 'bottom-empty' : 'bottom');

$classes = "$main $main_sidebar $intro $bottom_sidebar $bottom";
?>

<div<?php if (!empty($css_id)): ?> id="<?php print $css_id; ?>"<?php endif; ?> class="l-panels-complex-b <?php print $classes; ?>">
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
  <?php if (!empty($content['intro'])): ?>
    <div class="l-intro">
      <?php print $content['intro']; ?>
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

