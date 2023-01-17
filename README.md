# Svaml

A YAML preprocessor integration for Svelte

Use `svaml` by adding it as a preprocessor to your `svelte` or `svelte-kit` project and seamlessly import and use yaml files in your projects.

## Configuration

```javascript
import {svaml} from 'svaml';
/** @type {import('@sveltejs/kit').Config} */
const config = {
    ...,
	extensions: [
		..., '.yml', '.yaml'
	],
	preprocess: [..., svaml()],
}
```

## Usage
In your `svelte-kit` project you can import your yaml files as a glob import

```javascript
    const modules = import.meta.glob(`/src/<yaml_dir>/*.{yml,yaml}`);
```
then you can access the default `.yaml` field (or whatever you've configured in the plugin) in the resolved component or 
```javascript
    let component = await (modules[0].resolver())
    let your_parsed_yaml = component.yaml
    let your_parsed_file_name = component.file_name
```


## Contributing

Open a PR we'll review it and merge
