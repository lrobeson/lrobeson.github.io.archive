<?php
/**
 * Implements hook_panels_layouts().
 */
function f1ux_complex_c_layouts() {
  $items['complex_c'] = array(
    'title' => t('Complex C'),
    'category' => t('Responsive'),
    'icon' => 'complex_c.png',
    'theme' => 'complex_c',
    'admin css' => '../../../css/panels-admin/complex-c.css',
    'regions' => array(
      'top' => t('Top'),
      'main_first' => t('Main first'),
      'main_second' => t('Main second'),
      'main_third' => t('Main third'),
      'first' => t('First'),
      'second' => t('Second'),
      'bottom_first' => t('Bottom first'),
      'bottom_second' => t('Bottom second'),
    ),
  );

  return $items;
}