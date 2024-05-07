export default `
flowchart TD
    classDef concluido fill:#f9f,stroke:#333,stroke-width:1px;
    classDef branco fill:#fff;

    A(fa:fa-info-circle Apresentação):::concluido --> B(fa:fa-mountain O desafio)
    B --> C(fa:fa-tasks Casos de uso)
    C:::branco
    subgraph C[Casos de uso]
        direction LR
        C1[Exemplos] -.-> C2([IA generativa])
    end
    C -->|One| E[Laptop]
    C -->|Two| F[iPhone]
    C -->|/icons/| F[fa:fa-car Car]
    click A "docs/intro"
    click B "docs/category/o-desafio"
    click C1 "docs/casos-de-uso/Exemplos"
    click C2 "docs/casos-de-uso/IA_generativa"
    `;
