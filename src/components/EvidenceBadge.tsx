import React from 'react';
import { EvidenceCategory } from '@/data/primary-documents';

export type EvidentiaryTier = 'PRIMARY' | 'SCHOLARSHIP' | 'EDITORIAL';

interface BadgeDefinition {
  label: string;
  tier: EvidentiaryTier;
  tierLabel: string;
  badgeClass: string;
}

interface EvidenceBadgeProps {
  category: EvidenceCategory | string;
  size?: 'sm' | 'md' | 'lg';
  showTier?: boolean;
  className?: string;
}

const BADGE_MAP: Record<string, BadgeDefinition> = {
  PRIMARY_RECORD: {
    label: 'PRIMARY ARCHIVE',
    tier: 'PRIMARY',
    tierLabel: 'PRIMARY SOURCE',
    badgeClass: 'border-b border-[#C62828] text-[#E53935] bg-transparent',
  },
  OFFICIAL_ENQUIRY: {
    label: 'OFFICIAL INQUIRY',
    tier: 'PRIMARY',
    tierLabel: 'PRIMARY SOURCE',
    badgeClass: 'border-b border-[#C62828] text-[#E53935] bg-transparent',
  },
  PARLIAMENTARY_RECORD: {
    label: 'PARLIAMENTARY RECORD',
    tier: 'PRIMARY',
    tierLabel: 'PRIMARY SOURCE',
    badgeClass: 'border-b border-[#C62828] text-[#E53935] bg-transparent',
  },
  ECONOMIC_DATA: {
    label: 'ECONOMETRIC MODEL',
    tier: 'SCHOLARSHIP',
    tierLabel: 'PEER-REVIEWED',
    badgeClass: 'border-b border-[#A3A39D] text-[#F5F5F0] bg-transparent',
  },
  SCHOLARLY_ESTIMATE: {
    label: 'SCHOLARLY ESTIMATE',
    tier: 'SCHOLARSHIP',
    tierLabel: 'PEER-REVIEWED',
    badgeClass: 'border-b border-[#A3A39D] text-[#F5F5F0] bg-transparent',
  },
  SECONDARY_SCHOLARSHIP: {
    label: 'SECONDARY SCHOLARSHIP',
    tier: 'SCHOLARSHIP',
    tierLabel: 'PEER-REVIEWED',
    badgeClass: 'border-b border-[#A3A39D] text-[#F5F5F0] bg-transparent',
  },
  DISPUTED_FIGURE: {
    label: 'HISTORICAL DISPUTE',
    tier: 'EDITORIAL',
    tierLabel: 'EDITORIAL AUDIT',
    badgeClass: 'border-b border-[#2A2A2A] text-[#A3A39D] bg-transparent',
  },
  EDITORIAL_AUDIT: {
    label: 'FORENSIC AUDIT NOTE',
    tier: 'EDITORIAL',
    tierLabel: 'EDITORIAL AUDIT',
    badgeClass: 'border-b border-[#2A2A2A] text-[#A3A39D] bg-transparent',
  },
};

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({
  category,
  size = 'md',
  showTier = false,
  className = '',
}) => {
  const meta = BADGE_MAP[category] || {
    label: category.replace(/_/g, ' '),
    tier: 'EDITORIAL',
    tierLabel: 'AUDIT NOTE',
    badgeClass: 'border-b border-[#2A2A2A] text-[#A3A39D] bg-transparent',
  };

  const sizeClasses = {
    sm: 'text-[10px] pb-0.5 tracking-[0.14em]',
    md: 'text-[11px] pb-0.5 tracking-[0.16em]',
    lg: 'text-[12px] pb-1 tracking-[0.18em]',
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase font-semibold rounded-none select-none transition-colors ${sizeClasses} ${meta.badgeClass} ${className}`}
      title={`${meta.tierLabel}: ${meta.label} — Verified Archival Classification`}
    >
      <span className="text-[#C62828] text-[9px]" aria-hidden="true">
        ▪
      </span>
      {showTier && (
        <span className="opacity-60 text-[9px] border-r border-[#2A2A2A] pr-1.5 mr-0.5">
          {meta.tierLabel}
        </span>
      )}
      <span>{meta.label}</span>
    </span>
  );
};
