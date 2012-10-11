<?php

if (is_file(MODX_BASE_PATH . $plugin_base . 'tbfix.js')) {
	$e = $modx->event;
	$e->output('<script type="text/javascript">');
	$e->output('(function () {');
	$e->output('var lang = "' . addslashes($modx->config['manager_language']) . '";');
	$e->output('var theme_path = "' . $modx->config['base_url'] . 'manager/media/style/' . $modx->config['manager_theme'] . '";');
	$e->output(file_get_contents(MODX_BASE_PATH . $plugin_base . 'tbfix.js'));
	$e->output('})();');
	$e->output('</script>');
}
