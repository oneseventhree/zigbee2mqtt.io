"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[94078],{594339:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-2f5df980","path":"/devices/WB-MSW-ZIGBEE_v.3.html","title":"Sprut.device WB-MSW-ZIGBEE v.3 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sprut.device WB-MSW-ZIGBEE v.3 control via MQTT","description":"Integrate your Sprut.device WB-MSW-ZIGBEE v.3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-12-31T16:51:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Description","slug":"description","link":"#description","children":[]},{"level":3,"title":"Configuring IR","slug":"configuring-ir","link":"#configuring-ir","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Illuminance_lux (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Occupancy_level (numeric)","slug":"occupancy-level-numeric","link":"#occupancy-level-numeric","children":[]},{"level":3,"title":"Co2 (numeric)","slug":"co2-numeric","link":"#co2-numeric","children":[]},{"level":3,"title":"Voc (numeric)","slug":"voc-numeric","link":"#voc-numeric","children":[]},{"level":3,"title":"Noise (numeric)","slug":"noise-numeric","link":"#noise-numeric","children":[]},{"level":3,"title":"Noise_detected (binary)","slug":"noise-detected-binary","link":"#noise-detected-binary","children":[]},{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"Switch (l3 endpoint)","slug":"switch-l3-endpoint","link":"#switch-l3-endpoint","children":[]},{"level":3,"title":"Noise_timeout (numeric)","slug":"noise-timeout-numeric","link":"#noise-timeout-numeric","children":[]},{"level":3,"title":"Occupancy_timeout (numeric)","slug":"occupancy-timeout-numeric","link":"#occupancy-timeout-numeric","children":[]},{"level":3,"title":"Temperature_offset (numeric)","slug":"temperature-offset-numeric","link":"#temperature-offset-numeric","children":[]},{"level":3,"title":"Occupancy_sensitivity (numeric)","slug":"occupancy-sensitivity-numeric","link":"#occupancy-sensitivity-numeric","children":[]},{"level":3,"title":"Noise_detect_level (numeric)","slug":"noise-detect-level-numeric","link":"#noise-detect-level-numeric","children":[]},{"level":3,"title":"Co2_autocalibration (enum)","slug":"co2-autocalibration-enum","link":"#co2-autocalibration-enum","children":[]},{"level":3,"title":"Co2_manual_calibration (enum)","slug":"co2-manual-calibration-enum","link":"#co2-manual-calibration-enum","children":[]},{"level":3,"title":"Th_heater (enum)","slug":"th-heater-enum","link":"#th-heater-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1671983971000},"filePathRelative":"devices/WB-MSW-ZIGBEE_v.3.md"}')},58721:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var a=o(166252);const i=(0,a._)("h1",{id:"sprut-device-wb-msw-zigbee-v-3",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#sprut-device-wb-msw-zigbee-v-3","aria-hidden":"true"},"#"),(0,a.Uk)(" Sprut.device WB-MSW-ZIGBEE v.3")],-1),n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"WB-MSW-ZIGBEE v.3")],-1),s=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Wall-mounted Zigbee sensor")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"temperature, illuminance, illuminance_lux, humidity, occupancy, occupancy_level, co2, voc, noise, noise_detected, switch (state), noise_timeout, occupancy_timeout, temperature_offset, occupancy_sensitivity, noise_detect_level, co2_autocalibration, co2_manual_calibration, th_heater, linkquality")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WB-MSW-ZIGBEE-v.3.jpg",alt:"Sprut.device WB-MSW-ZIGBEE v.3"})])],-1),r=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h3><p>Wiren Board WB-MSW v.3 — hybrid digital sensor of temperature, humidity, illumination, noise, CO2 and VOC level. It is equipped with the IR blaster (and the receiver for learning). Designed for climate control in residential and office premises.</p><h3 id="configuring-ir" tabindex="-1"><a class="header-anchor" href="#configuring-ir" aria-hidden="true">#</a> Configuring IR</h3><p>The sensor contains 32 banks for storing IR commands. Training takes place through the built-in IR receiver.</p><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can be configured.</p><h4 id="start-learn-to-rom" tabindex="-1"><a class="header-anchor" href="#start-learn-to-rom" aria-hidden="true">#</a> Start learn to ROM</h4><p>Request:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;learn_start&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;rom&quot;</span><span class="token operator">:</span><span class="token number">0</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>rom</code>: Memory cell number (from 0 to 31)</li></ul><h4 id="stop-learn-to-rom" tabindex="-1"><a class="header-anchor" href="#stop-learn-to-rom" aria-hidden="true">#</a> Stop learn to ROM</h4><p>Request:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;learn_stop&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;rom&quot;</span><span class="token operator">:</span><span class="token number">0</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>rom</code>: Memory cell number (from 0 to 31)</li></ul><h4 id="play-from-rom" tabindex="-1"><a class="header-anchor" href="#play-from-rom" aria-hidden="true">#</a> Play from ROM</h4><p>Request:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;play_store&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;rom&quot;</span><span class="token operator">:</span><span class="token number">0</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>rom</code>: Memory cell number (from 0 to 31)</li></ul><h4 id="clear-all-rom-s" tabindex="-1"><a class="header-anchor" href="#clear-all-rom-s" aria-hidden="true">#</a> Clear all ROM&#39;s</h4><p>Request:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;clear_store&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="start-learn-to-ram" tabindex="-1"><a class="header-anchor" href="#start-learn-to-ram" aria-hidden="true">#</a> Start learn to RAM</h4><p>Request:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;learn_start&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;rom&quot;</span><span class="token operator">:</span><span class="token number">0</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="stop-learn-to-ram" tabindex="-1"><a class="header-anchor" href="#stop-learn-to-ram" aria-hidden="true">#</a> Stop learn to RAM</h4><p>Request:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;learn_ram_stop&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="play-from-ram" tabindex="-1"><a class="header-anchor" href="#play-from-ram" aria-hidden="true">#</a> Play from RAM</h4><p>Request:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;play_ram&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',30),p=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),h=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),m=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="occupancy-level-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-level-numeric" aria-hidden="true">#</a> Occupancy_level (numeric)</h3><p>The measured occupancy value. Value can be found in the published state on the <code>occupancy_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric" aria-hidden="true">#</a> Co2 (numeric)</h3><p>The measured CO2 (carbon dioxide) value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="voc-numeric" tabindex="-1"><a class="header-anchor" href="#voc-numeric" aria-hidden="true">#</a> Voc (numeric)</h3><p>Measured VOC value. Value can be found in the published state on the <code>voc</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppb</code>.</p><h3 id="noise-numeric" tabindex="-1"><a class="header-anchor" href="#noise-numeric" aria-hidden="true">#</a> Noise (numeric)</h3><p>The measured noise value. Value can be found in the published state on the <code>noise</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>dBA</code>.</p><h3 id="noise-detected-binary" tabindex="-1"><a class="header-anchor" href="#noise-detected-binary" aria-hidden="true">#</a> Noise_detected (binary)</h3><p>Indicates whether the device detected noise. Value can be found in the published state on the <code>noise_detected</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> noise_detected is ON, if <code>false</code> OFF.</p><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h3 id="switch-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l3-endpoint" aria-hidden="true">#</a> Switch (l3 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l3&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l3&quot;: &quot;&quot;}</code>.</p><h3 id="noise-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#noise-timeout-numeric" aria-hidden="true">#</a> Noise_timeout (numeric)</h3><p>Time in seconds after which noise is cleared after detecting it (default: 60). Value can be found in the published state on the <code>noise_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;noise_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;noise_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2000</code>. The unit of this value is <code>s</code>.</p><h3 id="occupancy-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-numeric" aria-hidden="true">#</a> Occupancy_timeout (numeric)</h3><p>Time in seconds after which occupancy is cleared after detecting it (default: 60). Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2000</code>. The unit of this value is <code>s</code>.</p><h3 id="temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-offset-numeric" aria-hidden="true">#</a> Temperature_offset (numeric)</h3><p>Self-heating compensation. The compensation value is subtracted from the measured temperature. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-10</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>.</p><h3 id="occupancy-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-sensitivity-numeric" aria-hidden="true">#</a> Occupancy_sensitivity (numeric)</h3><p>If the sensor is triggered by the slightest movement, reduce the sensitivity, otherwise increase it (default: 50). Value can be found in the published state on the <code>occupancy_sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2000</code>.</p><h3 id="noise-detect-level-numeric" tabindex="-1"><a class="header-anchor" href="#noise-detect-level-numeric" aria-hidden="true">#</a> Noise_detect_level (numeric)</h3><p>The minimum noise level at which the detector will work (default: 50). Value can be found in the published state on the <code>noise_detect_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;noise_detect_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;noise_detect_level&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>150</code>. The unit of this value is <code>dBA</code>.</p><h3 id="co2-autocalibration-enum" tabindex="-1"><a class="header-anchor" href="#co2-autocalibration-enum" aria-hidden="true">#</a> Co2_autocalibration (enum)</h3><p>Automatic calibration of the CO2 sensor. If ON, the CO2 sensor will automatically calibrate every 7 days. (MH-Z19B sensor). Value can be found in the published state on the <code>co2_autocalibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2_autocalibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;co2_autocalibration&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="co2-manual-calibration-enum" tabindex="-1"><a class="header-anchor" href="#co2-manual-calibration-enum" aria-hidden="true">#</a> Co2_manual_calibration (enum)</h3><p>Ventilate the room for 20 minutes, turn on manual calibration, and turn it off after one second. After about 5 minutes the CO2 sensor will show 400ppm. Calibration completed. (MH-Z19B sensor). Value can be found in the published state on the <code>co2_manual_calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2_manual_calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;co2_manual_calibration&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="th-heater-enum" tabindex="-1"><a class="header-anchor" href="#th-heater-enum" aria-hidden="true">#</a> Th_heater (enum)</h3><p>Turn on when working in conditions of high humidity (more than 70 %, RH) or condensation, if the sensor shows 0 or 100 %.. Value can be found in the published state on the <code>th_heater</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;th_heater&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;th_heater&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',46),v={},b=(0,o(983744).Z)(v,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),i,(0,a._)("table",null,[n,(0,a._)("tbody",null,[c,(0,a._)("tr",null,[s,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=Sprut.device"},{default:(0,a.w5)((()=>[(0,a.Uk)("Sprut.device")])),_:1})])]),d,l,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),r,(0,a.kq)(" Notes END: Do not edit below this line "),p,(0,a._)("p",null,[(0,a.Uk)("This device supports OTA updates, for more information see "),(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("OTA updates")])),_:1}),(0,a.Uk)(".")]),h,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),m])}]])}}]);