
import { DEFAULT_YAML_EXPORTED_NAME, DEFAULT_YAML_EXT } from "./consts";
import {basename, parse as path_parse} from 'path';
import {PreprocessorGroup} from "svelte/types/compiler/preprocess";
import { parse } from 'yaml'


/** 
 * Main svaml entrypoint
 * @param  {string} [name] 
 * The field which will be exported by the parsed yaml file default "yaml" 
 * @param  {string[]} [extensions] 
 * The extension for the yaml files you need default [".yaml", ".yml"] 
*/
export function svaml(name?:string, extensions?:string[]):PreprocessorGroup {
    const exported_name = name ?? DEFAULT_YAML_EXPORTED_NAME
    const yaml_extensions = extensions ?? DEFAULT_YAML_EXT

	return {
		markup: async ({ content, filename }) => {
            if(!filename){
                return
            }
			const fileExt =  path_parse(filename).ext
			const fileName = basename(filename, fileExt);
			if (yaml_extensions.includes(fileExt)) {
				const parsed_yaml = {...parse(content), doc_path: fileName}

				return {
					code: `
					<script context="module">
                        export const ${exported_name} = ${JSON.stringify(parsed_yaml)}
					</script>
					`,
					map:''
				}
			} else {
				return 
			}
		}
	}
}