<?php
  $preface = 'preface';
  $sidebar = (empty($content['sidebar']) ? 'sidebar-empty' : 'sidebar');
  $row1first = (empty($content['row-1']) ? 'row-1-empty' : 'row-1');
  $row2first = (empty($content['row-2-first']) ? 'row-2-first-empty' : 'row-2-first');
  $row2second = (empty($content['row-2-second']) ? 'row-2-second-empty' : 'row-2-second');
  $row2third = (empty($content['row-2-third']) ? 'row-2-third-empty' : 'row-2-third');
  $row3first = (empty($content['row-3-first']) ? 'row-3-first-empty' : 'row-3-first');
  $row3second = (empty($content['row-3-second']) ? 'row-3-second-empty' : 'row-3-second');
  $row3third = (empty($content['row-3-third']) ? 'row-3-third-empty' : 'row-3-third');
  $row4first = (empty($content['row-4-first']) ? 'row-4-first-empty' : 'row-4-first');
  $row4second = (empty($content['row-4-second']) ? 'row-4-second-empty' : 'row-4-second');
  $row4third = (empty($content['row-4-third']) ? 'row-4-third-empty' : 'row-4-third');
  $postscript = (empty($content['postscript']) ? 'postscript-empty' : 'postscript');
  $classes = "$preface $sidebar $row1first $row2first $row2second $row2third $row3first $row3second $row3third $row4first $row4second $row4third $postscript";
?>

<div<?php if (!empty($css_id)): ?> id="<?php print $css_id; ?>"<?php endif; ?> class="l-panels-left-sidebar-three-column <?php print $classes; ?>">
 
  <div class="l-preface">
    <?php print $content['preface']; ?>
  </div>
    
  
  <div class="l-main">
    <section class="l-row-1">
      <?php if (!empty($content['row-1'])): ?>
        <div class="l-row-1">
          <?php print $content['row-1']; ?>
        </div>
      <?php endif; ?>
    </section>
    
    <section class="l-row-2">
      <?php if (!empty($content['row-2-first'])): ?>
        <div class="l-row-2-first">
          <?php print $content['row-2-first']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['row-2-second'])): ?>
        <div class="l-row-2-second">
          <?php print $content['row-2-second']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['row-2-third'])): ?>
        <div class="l-row-2-third">
          <?php print $content['row-2-third']; ?>
        </div>
      <?php endif; ?>
    </section>
   
    <section class="l-row-3">
      <?php if (!empty($content['row-3-first'])): ?>
        <div class="l-row-3-first">
          <?php print $content['row-3-first']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['row-3-second'])): ?>
        <div class="l-row-3-second">
          <?php print $content['row-3-second']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['row-3-third'])): ?>
        <div class="l-row-3-third">
          <?php print $content['row-3-third']; ?>
        </div>
      <?php endif; ?>
    </section>
    
    <section class="l-row-4">
      <?php if (!empty($content['row-4-first'])): ?>
        <div class="l-row-4-first">
          <?php print $content['row-4-first']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['row-4-second'])): ?>
        <div class="l-row-4-second">
          <?php print $content['row-4-second']; ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($content['row-4-third'])): ?>
        <div class="l-row-4-third">
          <?php print $content['row-4-third']; ?>
        </div>
      <?php endif; ?>
    </section>    
  </div>

  <?php if (!empty($content['sidebar'])): ?>
    <aside class="l-sidebar">
      <?php print $content['sidebar']; ?>
    </aside>
  <?php endif; ?>


  <?php if (!empty($content['postscript'])): ?>
    <div class="l-postscript">
      <?php print $content['postscript']; ?>
    </div>
  <?php endif; ?>
  
</div>
