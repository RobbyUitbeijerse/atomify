export interface ComponentConstructor {
    connectedCallback?: () => void;
    attributeChangedCallback?: (name: string, oldValue: string| null, newValue: string | null) => void;
    disconnectedCallback?: () => void;
    render?: () => any;
    renderRoot: CustomElementRenderRoot;
    connected: boolean;
    properties: any;
    __canAttachShadowDom: boolean;
    __hasShadyPolyfill: boolean;
    __nodeName: string;
    __jsxProps?: Map<string, unknown>;
    componentOnReady: () => Promise<any>;
}

export interface ComponentOptions {
    tag: string,
    style?: string,
    styles?: string[];
    shadow?: boolean;
}

export interface CustomElement extends HTMLElement {
    connectedCallback?(): void;
    disconnectedCallback?(): void;
    observedAttributes?(): void;
    render?(): void;
}

export interface CustomElementConstructor {
    new (...args: any[]): CustomElement;
}

export type CustomElementRenderRoot = Element | DocumentFragment;

export interface RenderRoot {
    renderRoot: CustomElementRenderRoot
}

export type StyleString = string | boolean;

export interface RenderTemplate {
    template: HTMLTemplateElement;
    styles: StyleString;
    templateResult: DocumentFragment;
}