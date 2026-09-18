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
    badgeClass: 'border border-[#C62828]/50 bg-[#C62828]/10 text-[#E53935]',
  },
  OFFICIAL_ENQUIRY: {
    label: 'OFFICIAL INQUIRY',
    tier: 'PRIMARY',
    tierLabel: 'PRIMARY SOURCE',
    badgeClass: 'border border-[#C62828]/50 bg-[#C62828]/10 text-[#E53935]',
  },
  PARLIAMENTARY_RECORD: {
    label: 'PARLIAMENTARY RECORD',
    tier: 'PRIMARY',
    tierLabel: 'PRIMARY SOURCE',
    badgeClass: 'border border-[#C62828]/50 bg-[#C62828]/10 text-[#E53935]',
  },
  ECONOMIC_DATA: {
    label: 'ECONOMETRIC MODEL',
    tier: 'SCHOLARSHIP',
    tierLabel: 'PEER-REVIEWED',
    badgeClass: 'border border-[#2A2A2A] bg-[#141414] text-[#F5F5F0]',
  },
  SCHOLARLY_ESTIMATE: {
    label: 'SCHOLARLY ESTIMATE',
    tier: 'SCHOLARSHIP',
    tierLabel: 'PEER-REVIEWED',
    badgeClass: 'border border-[#2A2A2A] bg-[#141414] text-[#F5F5F0]',
  },
  SECONDARY_SCHOLARSHIP: {
    label: 'SECONDARY SCHOLARSHIP',
    tier: 'SCHOLARSHIP',
    tierLabel: 'PEER-REVIEWED',
    badgeClass: 'border border-[#2A2A2A] bg-[#141414] text-[#F5F5F0]',
  },
  DISPUTED_FIGURE: {
    label: 'HISTORICAL DISPUTE',
    tier: 'EDITORIAL',
    tierLabel: 'EDITORIAL AUDIT',
    badgeClass: 'border border-[#2A2A2A] bg-[#0E0E0E] text-[#A3A39D]',
  },
  EDITORIAL_AUDIT: {
    label: 'FORENSIC AUDIT NOTE',
    tier: 'EDITORIAL',
    tierLabel: 'EDITORIAL AUDIT',
    badgeClass: 'border border-[#2A2A2A] bg-[#0E0E0E] text-[#A3A39D]',
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
    badgeClass: 'border border-[#2A2A2A] bg-[#0E0E0E] text-[#A3A39D]',
  };

  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 tracking-[0.14em]',
    md: 'text-[11px] px-2.5 py-0.5 tracking-[0.16em]',
    lg: 'text-[12px] px-3 py-1 tracking-[0.18em]',
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
