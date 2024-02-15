import {
    RootAppSchema,
    RootEngineSchema,
    RootGlobalSchema,
    RootIntegrationSchema,
    RootLocalSchema,
    RootPluginSchema,
    RootPluginsSchema,
    RootPrivateSchema,
    RootProjectSchema,
    RootTemplateSchema,
    RootTemplatesSchema,
    getContext,
    logSuccess,
} from '@rnv/core';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { z } from 'zod';
import path from 'path';
import fs from 'fs';


export const generateSchema = async () => {
    _generateSchemaFile({ schema: RootProjectSchema, schemaId: 'rnv.project' });
    _generateSchemaFile({ schema: RootAppSchema, schemaId: 'rnv.app' });
    _generateSchemaFile({ schema: RootLocalSchema, schemaId: 'rnv.local' });
    _generateSchemaFile({ schema: RootEngineSchema, schemaId: 'rnv.engine' });
    _generateSchemaFile({ schema: RootGlobalSchema, schemaId: 'rnv.global' });
    _generateSchemaFile({ schema: RootPluginsSchema, schemaId: 'rnv.plugins' });
    _generateSchemaFile({ schema: RootTemplateSchema, schemaId: 'rnv.template' });
    _generateSchemaFile({ schema: RootPrivateSchema, schemaId: 'rnv.private' });
    _generateSchemaFile({ schema: RootPluginSchema, schemaId: 'rnv.plugin' });
    _generateSchemaFile({ schema: RootTemplatesSchema, schemaId: 'rnv.templates' });
    _generateSchemaFile({ schema: RootIntegrationSchema, schemaId: 'rnv.integration' });

    logSuccess('Sucessfully exported all schemas');
};

const _generateSchemaFile = (opts: { schema: z.ZodObject<any>; schemaId: string }) => {
    const { schema, schemaId } = opts;
    const ctx = getContext();
    const jsonSchema: any = zodToJsonSchema(schema);
    jsonSchema['$schema'] = 'http://json-schema.org/draft-04/schema#';


    console.log('jsonSchema', jsonSchema);

    // jsonSchema.definitions[schemaId].properties['$schema'] = {
    //     type: 'string',
    //     description: 'schema definition', 
    // };

    const destFolder = path.join(ctx.paths.project.dir, `docs/schemas`);
    if (!fs.existsSync(destFolder)) {
        fs.mkdirSync(destFolder, { recursive: true });
    }
    const destPath = path.join(destFolder, `${schemaId}.json`);
    fs.writeFileSync(destPath, JSON.stringify(jsonSchema, null, 2));

    // const destFolder2 = path.join(ctx.paths.project.dir, `.rnv/schema`);
    // if (!fs.existsSync(destFolder2)) {
    //     fs.mkdirSync(destFolder2, { recursive: true });
    // }
    // const destPath2 = path.join(destFolder2, `${schemaId}.json`);

    // fs.writeFileSync(destPath2, JSON.stringify(jsonSchema, null, 2));
};




const _printContent = (header, key, keyPath, prop, level, { hidePath }) => {
    const examples = prop.examples || [];
    let exStr = '';
    let examplesStr = '';
    if (prop.type === 'string' || prop.type === 'integer' || prop.type === 'boolean') {
        exStr += examples.map(v => `
\`\`\`json
${JSON.stringify(JSON.parse(`{"${key}": "${v}"}`), null, 2)}
\`\`\`
`).join('\n\n');
    } else if (prop.type === 'object' || prop.type === 'array') {
        exStr += examples.map(v => `
\`\`\`json
${JSON.stringify(JSON.parse(`{"${key}": ${JSON.stringify(v, null, 2)}}`), null, 2)}
\`\`\`
`).join('\n\n');
    }
    // try {
    //     exStr = JSON.stringify(JSON.parse(exStr), null, 2);
    // } catch (e) {
    //     // BAH
    // }
    // else if (prop.type === 'array') {
    //     exStr = examples.map(v => `"${key}": ${JSON.stringify(v, null, 2)}`).join('\n\n');
    // }
    if (exStr.length) {
        examplesStr = `**examples**

${exStr}

`;
    }
    const defaultProp = prop.default ? `\`${prop.default}\`` : '';
    const description = prop.description?.replace?.(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') || ''
    return `${level < 2 ? '\n' : ''}${header} ${level < 1 ? key : keyPath}

| Prop Name | Type | Default Value | Path |
| :----- | :----- | :---- | :---- |
| \`${key}\` | \`${prop.type}\` | ${defaultProp} | \`${hidePath ? '' : keyPath}\` |

${description || ''}

${examplesStr}

---

`;
};

const maxLevelHeader = 2;

const _parseSubProps = (c, obj, level, parentKey, conf) => {
    let pk = parentKey;
    let out = '';
    let header = '##';

    const l = level <= maxLevelHeader ? level : maxLevelHeader;
    for (let i = 0; i < l; i++) {
        header += '#';
    }
    let properties = {};
    // eslint-disable-next-line prefer-destructuring
    if (obj.properties) { properties = obj.properties; }
    if (!properties && obj && obj.additionalProperties && obj.additionalProperties.properties) {
        // eslint-disable-next-line prefer-destructuring
        properties = obj.additionalProperties.properties;
        if (properties) {
            pk = `${pk}.[object]`;
        }
    }


    if (properties) {
        Object.keys(properties).sort().forEach((k) => {
            const prop = properties[k];
            const key = `${pk}.${k}`;
            out += `${_printContent(header, k, key, prop, level, conf)}

${_parseSubProps(c, properties[k], level + 1, key, conf)}
`;
        });
    }
    return out;
};

// export const generateDocsApiJsonConfig = async (c) => {
//     let output = `---
// id: json-config
// title: renative.json API Reference
// sidebar_label: renative.json
// ---

// Following Config reference applies to all \`renative.json\` files, including:

// \`./renative.json\`

// \`./appConfigs/base/renative.json\`

// \`./appConfigs/\\<APP_ID\\>/renative.json\`

// \`\\<WORKSPACE\\>/renative.json\`

// \`\\<WORKSPACE\\>/\\<PROJECT_ID\\>/renative.json\`

// \`\\<WORKSPACE\\>/\\<PROJECT_ID\\>/appConfigs/base/renative.json\`

// \`\\<WORKSPACE\\>/\\<PROJECT_ID\\>/appConfigs/\\<APP_ID\\>/renative.json\`


// `;

//     const rootSchema = SchemaManager.RootAppSchema;

//     Object.keys(rootSchema.properties).sort().forEach((k1) => {
//         const prop = rootSchema.properties[k1];
//         output += `${_printContent('##', k1, k1, prop, 1, {})}

// ${_parseSubProps(c, prop, 1, k1, {})}


// `;
//     });

//     fs.writeFileSync(path.join(c.paths.project.dir, 'docs/api/json-config.md'), output);
// };


// export const generateDocsApiBuildConfig = async (c) => {
//     let output = `---
// id: build-config
// title: rnv Build Config Object Reference
// sidebar_label: build config object
// ---

// List of available config props injected into [Build Hooks](../guides/build_hooks) via method parameter

// `;

//     const rootSchema = SchemaManager.getRuntimeObjectSchema();

//     Object.keys(rootSchema.properties).sort().forEach((k1) => {
//         const prop = rootSchema.properties[k1];
//         output += `${_printContent('##', k1, k1, prop, 1, { hidePath: true })}

// ${_parseSubProps(c, prop, 1, k1, { hidePath: true })}


// `;
//     });


//     fs.writeFileSync(path.join(c.paths.project.dir, 'docs/api/build-config.md'), output);
// };


