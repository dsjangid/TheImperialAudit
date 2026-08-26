import React from 'react';
import { EvidenceCategory } from '@/data/primary-documents';

interface EvidenceBadgeProps {
  category: EvidenceCategory | string;
  size?: 'sm' | 'md';
  className?: string;
}

const badgeLabels: Record<string, { label: string; isAccent?: boolean }> = {
  PRIMARY_RECORD: {
    label: '[ PRIMARY ARCHIVE ]',
    isAccent: true,
  },
  OFFICIAL_ENQUIRY: {
    label: '[ OFFICIAL RECORD ]',
    isAccent: false,
  },
  PARLIAMENTARY_RECORD: {
    label: '[ PARLIAMENTARY RECORD ]',
    isAccent: false,
  },
  ECONOMIC_DATA: {
    label: '[ ECONOMIC RECORD ]',
    isAccent: true,
  },
  SCHOLARLY_ESTIMATE: {
    label: '[ HISTORICAL RESEARCH ]',
    isAccent: false,
  },
  SECONDARY_SCHOLARSHIP: {
    label: '[ HISTORICAL SCHOLARSHIP ]',
    isAccent: false,
  },
  DISPUTED_FIGURE: {
    label: '[ HISTORIOGRAPHICAL RECORD ]',
    isAccent: false,
  },
};

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({
  category,
  size = 'md',
  className = '',
}) => {
  const meta = badgeLabels[category] || {
    label: `[ ${category.replace(/_/g, ' ')} ]`,
    isAccent: false,
  };

  const isSmall = size === 'sm';

  return (
    <span
      className={`inline-block font-mono uppercase tracking-[0.18em] ${
        meta.isAccent ? 'text-accent font-semibold' : 'text-text/65'
      } ${isSmall ? 'text-[10px]' : 'text-[11px]'} ${className}`}
    >
      {meta.label}
    </span>
  );
};
