//<?php
/**
 * TBFix
 * 
 * Fix the toolbar for MODX Revo.
 * @author	 Ryota Mannari <info@manse.jp>
 * @events OnChunkFormRender, OnDocFormRender, OnModFormRender, OnSnipFormRender, OnTempFormRender, OnPluginFormRender, OnUserSettingsRender, OnUserFormRender, OnTVFormRender, OnWUsrFormRender
 * @modx_category Manager and Admin
 **/

global $modx;
$plugin_base = 'assets/plugins/tbfix/';
if (is_file(MODX_BASE_PATH . $plugin_base . 'bootstrap.php')) {
	require MODX_BASE_PATH . $plugin_base . 'bootstrap.php';
}

