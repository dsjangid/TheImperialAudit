'use client';

import React, { useState } from 'react';
import { revenueFlowNodes } from '@/data/flow-revenue';
import { EvidenceBadge } from './EvidenceBadge';

interface FollowTheMoneyProps {
  onOpenSourceDoc?: (docId: string) => void;
}

export const FollowTheMoney: React.FC<FollowTheMoneyProps> = ({ onOpenSourceDoc }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(revenueFlowNodes[0].id);

  const selectedNode =
    revenueFlowNodes.find((n) => n.id === selectedNodeId) || revenueFlowNodes[0];

  return (
    <section className="my-24 border-t border-text/15 pt-16" id="follow-the-money">
      {/* Section Masthead */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2 font-mono text-[11px] uppercase tracking-[0.25em]">
            <span className="text-accent font-semibold">FISCAL FLOW DIAGRAM</span>
            <span className="text-text/40 border-l border-text/20 pl-3">STRUCTURAL DRAIN ARCHITECTURE</span>
          </div>
          <h2 className="font-serif text-[32px] sm:text-[44px] md:text-[54px] font-black uppercase tracking-tight text-text leading-[0.95]">
            FOLLOW THE MONEY
          </h2>
          <p className="font-serif italic text-[16px] sm:text-[18px] text-text/70 mt-2">
            How Revenue Moved Through the Colonial System: From Indian Agrarian Taxes to the Metropolitan Treasury
          </p>
        </div>

        <div className="font-mono text-[12px] text-text/40 uppercase tracking-[0.15em]">
          <span>7-STAGE FISCAL PIPELINE</span>
        </div>
      </div>

      {/* Interactive Flow Pathway List */}
      <div className="mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text/40 mb-4">
          SELECT A FISCAL STAGE TO AUDIT:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 border-y border-text/15 py-6">
          {revenueFlowNodes.map((node, index) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className={`text-left p-3.5 transition-all relative border flex flex-col justify-between ${
                  isSelected
                    ? 'border-accent bg-accent/[0.06] text-accent'
                    : 'border-text/15 bg-text/[0.01] text-text/60 hover:text-text hover:border-text/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-1.5">
                    <span className={isSelected ? 'text-accent font-bold' : 'text-text/50'}>
                      STAGE {node.stepNumber}
                    </span>
                    {index < revenueFlowNodes.length - 1 && (
                      <span className="hidden lg:inline text-text/25 font-mono">→</span>
                    )}
                  </div>
                  <h4 className={`font-serif text-[13px] font-bold leading-tight ${
                    isSelected ? 'text-accent' : 'text-text'
                  }`}>
                    {node.title}
                  </h4>
                </div>
                <div className="mt-3 font-mono text-[10px] text-text/40">
                  <span>{node.dateRange}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Detailed Inspector */}
      {selectedNode && (
        <div className="pt-2">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-text/15 pb-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[20px] font-bold text-accent">
                STAGE {selectedNode.stepNumber}
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-text/40 border-l border-text/20 pl-3">
                {selectedNode.category}
              </span>
              <span className="font-mono text-[12px] text-text/60 border-l border-text/20 pl-3">
                {selectedNode.dateRange}
              </span>
            </div>

            <EvidenceBadge category={selectedNode.evidenceStatus} size="sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
            <div className="md:col-span-8 space-y-4">
              <h3 className="font-serif text-[24px] sm:text-[32px] font-bold text-text leading-tight">
                {selectedNode.title}
              </h3>
              <p className="font-serif italic text-[16px] text-text/75">
                {selectedNode.summary}
              </p>
              <div className="font-serif text-[15px] sm:text-[16px] leading-[1.8] text-text/85 pt-2">
                {selectedNode.historicalContext}
              </div>
            </div>

            <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-text/15 pt-4 md:pt-0 md:pl-8 space-y-4 font-mono text-[12px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-text/40 block">
                  TRANSACTION MECHANISM
                </span>
                <p className="font-serif text-[14px] text-text/80 mt-1 leading-snug">
                  {selectedNode.mechanism}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-text/40 block">
                  RECORDED EXTRACTIVE VOLUME
                </span>
                <p className="text-accent font-bold text-[15px] mt-0.5">
                  {selectedNode.figure}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-text/40 block">
                  SCOPE &amp; POPULATION
                </span>
                <p className="text-text/80 mt-0.5">{selectedNode.percentageOrScope}</p>
              </div>
            </div>
          </div>

          {/* Primary Source Reference Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-text/15 font-mono text-[12px]">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-text/40 block">
                PRIMARY SOURCE CITATION
              </span>
              <span className="text-text/90 font-semibold">{selectedNode.primarySource.citation}</span>
              <span className="text-text/40 text-[11px] ml-2">({selectedNode.primarySource.archiveRef})</span>
            </div>

            {selectedNode.primarySource.docId && onOpenSourceDoc && (
              <button
                type="button"
                onClick={() => onOpenSourceDoc(selectedNode.primarySource.docId!)}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent hover:underline font-bold"
              >
                [ VIEW ARCHIVAL RECORD → ]
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
