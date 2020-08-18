amis.define('docs/components/form/tree.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Tree 树形选择框",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "Tree 树形选择框",
    "icon": null,
    "order": 59,
    "html": "<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2><p>配置的<code>options</code>中，可以通过<code>children</code>字段进行嵌套展示，实现树形选择器</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"tree\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        }\n      ]\n    }\n  ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E9%80%89%E6%8B%A9%E5%99%A8%E6%A0%B7%E5%BC%8F\" href=\"#%E9%80%89%E6%8B%A9%E5%99%A8%E6%A0%B7%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>选择器样式</h2><p>配置<code>&quot;type&quot;: &quot;tree-select&quot;</code>可以实现选择器样式</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        }\n      ]\n    }\n  ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%87%AA%E5%8A%A8%E9%80%89%E4%B8%AD%E5%AD%90%E8%8A%82%E7%82%B9\" href=\"#%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%87%AA%E5%8A%A8%E9%80%89%E4%B8%AD%E5%AD%90%E8%8A%82%E7%82%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>选中父节点是否自动选中子节点</h2><p>默认选中父节点会自动选中子节点，可以设置<code>&quot;cascade&quot;: true</code>，不自动选中子节点</p>\n<div class=\"amis-preview\" style=\"height: 1000px\"><script type=\"text/schema\" height=\"1000\" scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"tree\",\n      \"name\": \"tree1\",\n      \"label\": \"默认自动选中子节点\",\n      \"multiple\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    },\n    {\n        \"type\": \"divider\"\n    },\n     {\n      \"type\": \"tree\",\n      \"name\": \"tree2\",\n      \"label\": \"不自动选中子节点\",\n      \"multiple\": true,\n      \"cascade\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9-%E5%80%BC%E6%98%AF%E5%90%A6%E5%8C%85%E5%90%AB%E5%AD%90%E8%8A%82%E7%82%B9\" href=\"#%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9-%E5%80%BC%E6%98%AF%E5%90%A6%E5%8C%85%E5%90%AB%E5%AD%90%E8%8A%82%E7%82%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>选中父节点，值是否包含子节点</h2><p>默认选中父节点，是不会带上子节点的值，想要自动带上子节点的值，那么配置<code>&quot;withChildren&quot;: true</code></p>\n<div class=\"amis-preview\" style=\"height: 1000px\"><script type=\"text/schema\" height=\"1000\" scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"tree\",\n      \"name\": \"tree1\",\n      \"label\": \"默认不自动带上子节点的值\",\n      \"multiple\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    },\n    {\n        \"type\": \"divider\"\n    },\n     {\n      \"type\": \"tree\",\n      \"name\": \"tree2\",\n      \"label\": \"自动带上子节点的值\",\n      \"multiple\": true,\n      \"withChildren\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div>\n<p>也可以设置<code>onlyChildren</code>，实现只包含子节点的值</p>\n<div class=\"amis-preview\" style=\"height: 1000px\"><script type=\"text/schema\" height=\"1000\" scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"tree\",\n      \"name\": \"tree1\",\n      \"label\": \"默认不自动带上子节点的值\",\n      \"multiple\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    },\n    {\n        \"type\": \"divider\"\n    },\n     {\n      \"type\": \"tree\",\n      \"name\": \"tree2\",\n      \"label\": \"只包含子节点的值\",\n      \"multiple\": true,\n      \"onlyChildren\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E9%BB%98%E8%AE%A4%E5%B1%95%E5%BC%80\" href=\"#%E9%BB%98%E8%AE%A4%E5%B1%95%E5%BC%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>默认展开</h2><p>默认是展开所有子节点的，如果不想默认展开，则配置<code>&quot;initiallyOpen&quot;: false</code></p>\n<div class=\"amis-preview\" style=\"height: 700px\"><script type=\"text/schema\" height=\"700\" scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"tree\",\n      \"name\": \"tree1\",\n      \"label\": \"默认不自动带上子节点的值\",\n      \"initiallyOpen\": false,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div>\n<p>如果层级较多，也可以配置<code>unfoldedLevel</code>指定展开的层级数。</p>\n<p>下例中设置<code>&quot;unfoldedLevel&quot;: 1</code>，默认展开第 1 层</p>\n<div class=\"amis-preview\" style=\"height: 700px\"><script type=\"text/schema\" height=\"700\" scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"tree\",\n      \"name\": \"tree1\",\n      \"label\": \"默认不自动带上子节点的值\",\n      \"initiallyOpen\": false,\n      \"unfoldedLevel\": 1,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\",\n              \"children\": [\n                {\n                    \"label\": \"B-2-1\",\n                    \"value\": \"b-2-1\"\n                },\n                {\n                    \"label\": \"B-2-2\",\n                    \"value\": \"b-2-2\"\n                },\n                {\n                    \"label\": \"B-2-3\",\n                    \"value\": \"b-2-3\"\n                }\n            ]\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>当做选择器表单项使用时，除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>options</td>\n<td><code>Array&lt;object&gt;</code>或<code>Array&lt;string&gt;</code></td>\n<td></td>\n<td><a href=\"./options#%E9%9D%99%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-options\">选项组</a></td>\n</tr>\n<tr>\n<td>source</td>\n<td><code>string</code>或 <a href=\"../../../types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-source\">动态选项组</a></td>\n</tr>\n<tr>\n<td>autoComplete</td>\n<td><a href=\"../../../types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8-autocomplete\">自动提示补全</a></td>\n</tr>\n<tr>\n<td>multiple</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否多选</td>\n</tr>\n<tr>\n<td>delimeter</td>\n<td><code>string</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E7%AC%A6-delimiter\">拼接符</a></td>\n</tr>\n<tr>\n<td>labelField</td>\n<td><code>string</code></td>\n<td><code>&quot;label&quot;</code></td>\n<td><a href=\"./options#%E9%80%89%E9%A1%B9%E6%A0%87%E7%AD%BE%E5%AD%97%E6%AE%B5-labelfield\">选项标签字段</a></td>\n</tr>\n<tr>\n<td>valueField</td>\n<td><code>string</code></td>\n<td><code>&quot;value&quot;</code></td>\n<td><a href=\"./options#%E9%80%89%E9%A1%B9%E5%80%BC%E5%AD%97%E6%AE%B5-valuefield\">选项值字段</a></td>\n</tr>\n<tr>\n<td>joinValues</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E5%80%BC-joinvalues\">拼接值</a></td>\n</tr>\n<tr>\n<td>extractValue</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8F%90%E5%8F%96%E5%A4%9A%E9%80%89%E5%80%BC-extractvalue\">提取值</a></td>\n</tr>\n<tr>\n<td>creatable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E5%89%8D%E7%AB%AF%E6%96%B0%E5%A2%9E-creatable\">新增选项</a></td>\n</tr>\n<tr>\n<td>addControls</td>\n<td>Array&lt;<a href=\"./formitem\">表单项</a>&gt;</td>\n<td></td>\n<td><a href=\"./options#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%B0%E5%A2%9E%E8%A1%A8%E5%8D%95%E9%A1%B9-addcontrols\">自定义新增表单项</a></td>\n</tr>\n<tr>\n<td>addApi</td>\n<td><a href=\"../../types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E9%85%8D%E7%BD%AE%E6%96%B0%E5%A2%9E%E6%8E%A5%E5%8F%A3-addapi\">配置新增选项接口</a></td>\n</tr>\n<tr>\n<td>editable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E5%89%8D%E7%AB%AF%E7%BC%96%E8%BE%91-editable\">编辑选项</a></td>\n</tr>\n<tr>\n<td>editControls</td>\n<td>Array&lt;<a href=\"./formitem\">表单项</a>&gt;</td>\n<td></td>\n<td><a href=\"./options#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BC%96%E8%BE%91%E8%A1%A8%E5%8D%95%E9%A1%B9-editcontrols\">自定义编辑表单项</a></td>\n</tr>\n<tr>\n<td>editApi</td>\n<td><a href=\"../../types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E9%85%8D%E7%BD%AE%E7%BC%96%E8%BE%91%E6%8E%A5%E5%8F%A3-editapi\">配置编辑选项接口</a></td>\n</tr>\n<tr>\n<td>removable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E5%88%A0%E9%99%A4%E9%80%89%E9%A1%B9\">删除选项</a></td>\n</tr>\n<tr>\n<td>deleteApi</td>\n<td><a href=\"../../types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E9%85%8D%E7%BD%AE%E5%88%A0%E9%99%A4%E6%8E%A5%E5%8F%A3-deleteapi\">配置删除选项接口</a></td>\n</tr>\n<tr>\n<td>hideRoot</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>如果想要显示个顶级节点，请设置为 <code>false</code></td>\n</tr>\n<tr>\n<td>rootLabel</td>\n<td><code>boolean</code></td>\n<td><code>&quot;顶级&quot;</code></td>\n<td>当 <code>hideRoot</code> 不为 <code>false</code> 时有用，用来设置顶级节点的文字。</td>\n</tr>\n<tr>\n<td>showIcon</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否显示图标</td>\n</tr>\n<tr>\n<td>showRadio</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否显示单选按钮，<code>multiple</code> 为 <code>false</code> 是有效。</td>\n</tr>\n<tr>\n<td>initiallyOpen</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>设置是否默认展开所有层级。</td>\n</tr>\n<tr>\n<td>unfoldedLevel</td>\n<td><code>number</code></td>\n<td><code>0</code></td>\n<td>设置默认展开的级数，只有<code>initiallyOpen</code>不是<code>true</code>时生效。</td>\n</tr>\n<tr>\n<td>cascade</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>当选中父节点时不自动选择子节点。</td>\n</tr>\n<tr>\n<td>withChildren</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>选中父节点时，值里面将包含子节点的值，否则只会保留父节点的值。</td>\n</tr>\n<tr>\n<td>onlyChildren</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>多选时，选中父节点时，是否只将其子节点加入到值中。</td>\n</tr>\n<tr>\n<td>rootCreatable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可以创建顶级节点</td>\n</tr>\n<tr>\n<td>rootCreateTip</td>\n<td><code>string</code></td>\n<td><code>&quot;添加一级节点&quot;</code></td>\n<td>创建顶级节点的悬浮提示</td>\n</tr>\n<tr>\n<td>minLength</td>\n<td><code>number</code></td>\n<td></td>\n<td>最少选中的节点数</td>\n</tr>\n<tr>\n<td>maxLength</td>\n<td><code>number</code></td>\n<td></td>\n<td>最多选中的节点数</td>\n</tr>\n</tbody>\n</table>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "选择器样式",
          "fragment": "%E9%80%89%E6%8B%A9%E5%99%A8%E6%A0%B7%E5%BC%8F",
          "fullPath": "#%E9%80%89%E6%8B%A9%E5%99%A8%E6%A0%B7%E5%BC%8F",
          "level": 2
        },
        {
          "label": "选中父节点是否自动选中子节点",
          "fragment": "%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%87%AA%E5%8A%A8%E9%80%89%E4%B8%AD%E5%AD%90%E8%8A%82%E7%82%B9",
          "fullPath": "#%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%87%AA%E5%8A%A8%E9%80%89%E4%B8%AD%E5%AD%90%E8%8A%82%E7%82%B9",
          "level": 2
        },
        {
          "label": "选中父节点，值是否包含子节点",
          "fragment": "%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9-%E5%80%BC%E6%98%AF%E5%90%A6%E5%8C%85%E5%90%AB%E5%AD%90%E8%8A%82%E7%82%B9",
          "fullPath": "#%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9-%E5%80%BC%E6%98%AF%E5%90%A6%E5%8C%85%E5%90%AB%E5%AD%90%E8%8A%82%E7%82%B9",
          "level": 2
        },
        {
          "label": "默认展开",
          "fragment": "%E9%BB%98%E8%AE%A4%E5%B1%95%E5%BC%80",
          "fullPath": "#%E9%BB%98%E8%AE%A4%E5%B1%95%E5%BC%80",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
