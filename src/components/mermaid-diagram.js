export default `
flowchart TD
    classDef concluido fill:#f9f,stroke:#333,stroke-width:1px;

    A(fa:fa-info-circle Apresentação):::concluido --> B(fa:fa-mountain O desafio)
    B --> C(fa:fa-tasks Casos de uso)
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|/icons/| F[fa:fa-car Car]
    click A "docs/intro"
    click B "docs/category/o-desafio"
    `;
