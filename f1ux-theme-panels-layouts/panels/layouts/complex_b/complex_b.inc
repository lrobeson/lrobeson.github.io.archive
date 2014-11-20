<?php
/**
 * Implements hook_panels_layouts().
 */
function f1ux_complex_b_panels_layouts() {
  $items['complex_b'] = array(
    'title' => t('Complex B'),
    'category' => t('Responsive'),
    'icon' => 'complex_b.png',
    'theme' => 'complex_b',
    'admin css' => '../../../css/panels-admin/complex-b.css',
    'regions' => array(
      'main' => t('Main'),
      'main_sidebar' => t('Main sidebar'),
      'intro' => t('Intro'),
      'bottom_sidebar' => t('Bottom sidebar'),
      'bottom' => t('Bottom'),
    ),
  );

  return $items;
}