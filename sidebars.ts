import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  defaultSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/quick-start',
        'getting-started/installation',
        'getting-started/first-webhook',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/overview',
        'architecture/three-plane-model',
        'architecture/delivery-modes',
        'architecture/security-model',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/cluster-enrollment',
        'guides/adapters',
        'guides/destinations',
        'guides/monitoring',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/helm-chart',
        'reference/cli',
        'reference/api',
        'reference/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/upgrades',
        'operations/backups',
        'operations/troubleshooting',
      ],
    },
  ],
};

export default sidebars;
