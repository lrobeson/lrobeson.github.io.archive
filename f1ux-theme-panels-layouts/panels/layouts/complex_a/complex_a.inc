<?php
/**
 * Implements hook_panels_layouts().
 */
function f1ux_complex_a_panels_layouts() {
  $items['complex_a'] = array(
    'title' => t('Complex A'),
    'category' => t('Responsive'),
    'icon' => 'complex_a.png',
    'theme' => 'complex_a',
    'admin css' => '../../../css/panels-admin/complex-a.css',
    'regions' => array(
      'main' => t('Main'),
      'main_sidebar' => t('Main sidebar'),
      'intro_first' => t('Intro first'),
      'intro_second' => t('Intro second'),
      'intro_third' => t('Intro third'),
      'bottom_sidebar' => t('Bottom sidebar'),
      'bottom' => t('Bottom'),
    ),
  );

  return $items;
}