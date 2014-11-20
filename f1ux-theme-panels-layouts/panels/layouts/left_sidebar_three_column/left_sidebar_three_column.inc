<?php
/**
 * Implements hook_panels_layouts().
 */
function f1ux_left_sidebar_three_column_panels_layouts() {
  $items['left_sidebar_three_column'] = array(
    'title' => t('Left sidebar, preface, three columns, postscript'),
    'category' => t('Responsive'),
    'icon' => 'left_sidebar_three_column.png',
    'theme' => 'left_sidebar_three_column',
    'admin css' => '../../../css/panels-admin/left-sidebar-three-column.css',
    'regions' => array(
      'preface' => t('Preface'),
      'sidebar' => t('Sidebar'),
      'row-1' => t('Row 1'),
      'row-2-first' => t('Row 2 First'),
      'row-3-first' => t('Row 3 First'),
      'row-4-first' => t('Row 4 First'),
      'row-2-second' => t('Row 2 Second'),
      'row-3-second' => t('Row 3 Second'),
      'row-4-second' => t('Row 4 Second'),
      'row-2-third' => t('Row 2 Third'),
      'row-3-third' => t('Row 3 Third'),
      'row-4-third' => t('Row 4 Third'),
      'postscript' => t('Postscript'),
    ),
  );

  return $items;
}
