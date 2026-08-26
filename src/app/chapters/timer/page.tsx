import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';
import { LiveSpendCounter } from '@/components/LiveSpendCounter';

export default function ConquestChapterPage() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/30">
      <Navbar lang="en" />
      <PageCornerBadges fileNo="001" chapterTitle="CONQUEST" pageNum="008" totalPages="190" />
      
      <main className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-28 md:pt-32 pb-24">
        
        {/* Article Masthead */}
        <header className="mb-16 border-b border-text/15 pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-text/50 mb-6">
            <span className="text-accent font-semibold">PART I · HISTORICAL INVESTIGATION · 1757–1857</span>
            <span>26 MIN READ · 12 PRIMARY DISPATCHES</span>
            <span>DECLASSIFIED IMPERIAL PAPERS</span>
          </div>

          <h1 
            className="font-serif text-text text-[clamp(36px,7.5vw,100px)] leading-[0.93] tracking-[-0.01em] uppercase font-black mb-4"
            style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
          >
            The Corporate Takeover
          </h1>
          <p className="font-serif italic text-[clamp(18px,2.2vw,26px)] text-text/75 leading-snug max-w-[45ch]">
            How a Joint-Stock Trading Monopoly Subjugated an Empire: From Plassey to the Annexation of Awadh.
          </p>

          <div className="mt-8 pt-6 border-t border-text/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-text/40">
            <div>
              <span className="text-text/25 uppercase text-[9px] block tracking-[0.15em]">RESEARCH DOSSIER</span>
              <span className="text-text/80">India Office Records &amp; Parliamentary Debates (Hansard)</span>
            </div>
            <div>
              <span className="text-text/25 uppercase text-[9px] block tracking-[0.15em]">PRIMARY PERIOD</span>
              <span className="text-text/80">23 June 1757 – 7 February 1856</span>
            </div>
          </div>
        </header>

        {/* Epigraph Block */}
        <div className="border-y border-text/20 py-10 my-12 max-w-[80ch]">
          <p className="font-serif italic text-[19px] leading-[1.75] text-text/85 mb-4">
            "The rise of our Indian Empire is not recorded in history; it is occluded in the archives of a Company, and in the debates of Parliament."
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40">
            — Attributed to John Stuart Mill, 1858
          </p>
        </div>

        {/* Introduction */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  <span className="float-left text-[64px] leading-[0.8] font-serif font-bold text-accent pr-3 pt-1">B</span>etween 1757 and 1857, the Indian subcontinent bore witness to an unprecedented historical transformation: a London-based mercantile corporation engineered the acquisition of a territorial empire governing over two hundred million subjects. The East India Company, originally chartered by Queen Elizabeth I to secure a share in the lucrative spice trade, metastasised from a coastal trading enterprise into a sprawling military-bureaucratic state. 
                </p>
                <p>
                  This chapter traces the anatomy of that expansion. It was not a singular, inevitable sweep of conquest, but a fragmented century of political opportunism, calculated diplomatic betrayal, military aggression, and the ruthless extraction of capital. Driven by an insatiable mandate to deliver dividends to shareholders in Leadenhall Street, the Company established a vast standing army funded by the taxation of the very populace it subdued.
                </p>
                <p>
                  Yet, alongside this narrative of systemic expropriation runs a parallel history of fierce, uninterrupted resistance. From the forests of the Jungle Mahals to the polygar fortresses of the south, from the sepoy barracks of Vellore to the hills of Chota Nagpur, early colonial authority was constantly challenged, necessitating a continuous apparatus of martial pacification. What follows is the granular record of both the conquest and the immediate revolts it provoked.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8 md:pt-0">
              <p>— THE ARCHIVE</p>
              <p>— 1757 TO 1857</p>
              <p>— THE EAST INDIA COMPANY</p>
            </aside>
          </div>
        </section>

        <hr className="border-t border-text/10 my-12" />

        {/* 1. BATTLE OF PLASSEY */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">CONQUEST · MILITARY</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">BATTLE OF PLASSEY</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">23 JUNE 1757 · PALASHI, BENGAL</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  The confrontation at Palashi on the banks of the Bhagirathi River is traditionally chronicled as the genesis of British dominion in India. However, historical scrutiny reveals an engagement decided less by martial superiority than by clandestine financial negotiations. Robert Clive, commanding a modest detachment of <span className="text-accent font-semibold">3,000 Company troops</span>, faced the seemingly overwhelming <span className="text-accent font-semibold">50,000-strong army of Siraj ud-Daulah</span>, the Nawab of Bengal. Yet the outcome was preordained in the counting houses of Calcutta, where the Company had successfully <span className="text-accent font-semibold">conspired with the wealthy Jagat Seth banking family and Mir Jafar</span>, the Nawab’s primary military commander.
                </p>
                <p>
                  When the artillery commenced firing on the morning of 23 June, the vast majority of the Bengali army, under Mir Jafar's command, refused to engage. The betrayal caused the Nawab's forces to collapse from within, transforming a potential military disaster for the British into a rout. Mir Jafar was subsequently installed as a puppet Nawab, though real authority had irrevocably shifted to the East India Company. Over the subsequent years, this control would be formalised by the <span className="text-accent font-semibold">Treaty of Allahabad in 1765</span> following the decisive Battle of Buxar, granting the Company <span className="text-accent font-semibold">Diwani rights—the legal authority to collect land revenue directly</span> from the populace of Bengal, Bihar, and Orissa.
                </p>
                <p>
                  The immediate aftermath of Plassey initiated a spectacular era of private plundering. Clive himself secured <span className="text-accent font-semibold">over £234,000 in personal &ldquo;gifts&rdquo;</span> from the newly installed Nawab, returning to England possessing a fortune that shocked the British establishment. This staggering extraction of wealth marked the inauguration of a structural fiscal drain, fundamentally realigning the global economy. Contemporary historiography continues to debate the exact nature of Plassey: whether it should be classified as a military battle or more accurately understood as an elaborate corporate coup d'état financed by alienated local elites.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— 3,000 COMPANY TROOPS VS 50,000 NAWAB FORCES</p>
                <p>— £234,000 EXTRACTED BY ROBERT CLIVE PERSONALLY</p>
                <p>— 1765 DIWANI RIGHTS GRANTED</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 2. THE BENGAL FAMINE OF 1770 */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">FAMINE · COLONIAL POLICY</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">THE BENGAL FAMINE OF 1770</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">1769–1773 · BENGAL PRESIDENCY</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  Between 1769 and 1773, the newly acquired territory of Bengal suffered a catastrophe of apocalyptic proportions. The Great Bengal Famine eradicated <span className="text-accent font-bold">between seven and ten million people</span>—nearly one-third of the entire population. While a failure of the monsoon initially triggered crop shortages, the catastrophic loss of life was fundamentally a product of colonial economic policy and the aggressive restructuring of traditional agrarian systems.
                </p>
                <p>
                  The East India Company, having just acquired the Diwani revenue-collecting rights, drastically altered local grain markets and taxation structures. Pre-colonial mechanisms that stored surplus grain and provided tax relief during droughts were dismantled in favour of inflexible revenue maximization. Even as the famine reached its zenith and corpses choked the streets of Murshidabad and Calcutta, the Company's revenue councils brutally enforced tax collection. Under the administration of Warren Hastings, revenue collection <span className="text-accent font-semibold">remarkably increased during the worst years of starvation</span>.
                </p>
                <p>
                  Crucially, the Company maintained its monopoly over the grain trade, hoarding supplies for military use and actively exporting grain from Bengal while the local peasantry starved. The famine represents a grim landmark in modern history: the first major documented instance of mass starvation directly engineered by corporate extraction. It underscored the lethal reality of a mercantile entity governing a territory entirely for shareholder profit, devoid of any administrative responsibility to the welfare of its subjects.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— EST. 7-10 MILLION FATALITIES</p>
                <p>— 1/4 TO 1/3 OF BENGAL POPULATION PERISHED</p>
                <p>— TAX REVENUES MAINTAINED DESPITE STARVATION</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 3. SANNYASI AND FAKIR REBELLIONS */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">REBELLION</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">SANNYASI AND FAKIR REBELLIONS</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">c. 1763–1800 · BENGAL, BIHAR</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  In the desolate aftermath of the Bengal Famine, the countryside ignited with one of the earliest sustained armed challenges to Company authority. The Sannyasi and Fakir rebellions constituted a protracted guerrilla war spearheaded by itinerant Hindu ascetics (Sannyasis) and Sufi mendicants (Fakirs). These groups, historically reliant on alms and customary rights to pilgrimage routes, found their traditional socio-economic survival threatened by the East India Company’s aggressive resumption of rent-free lands and draconian taxation policies.
                </p>
                <p>
                  Uniting with dispossessed zamindars, starving peasants, and disbanded soldiers of the former Nawabs, these armed ascetic orders orchestrated highly coordinated attacks on Company revenue collectors, treasuries, and granaries. Operating from impenetrable forest bases, leaders such as <span className="text-accent font-semibold">Majnu Shah, Bhawani Pathak, and the formidable Devi Chaudhurani</span> demonstrated sophisticated tactical acumen, repeatedly outmaneuvering British military detachments. The Company administration struggled for decades to pacify the region, frequently relying on scorched-earth military expeditions.
                </p>
                <p>
                  The legacy of the Sannyasi and Fakir rebellions remains heavily contested in modern historiography. While later nationalist literature, most notably Bankim Chandra Chatterjee’s influential 1882 novel <span className="text-accent font-semibold">Anandamath</span>, romanticised the movement as a nascent proto-nationalist Hindu religious crusade against alien rule, contemporary historians view it primarily through a socio-economic lens. It was a complex agrarian revolt triggered by intense colonial disruption, uniting diverse religious communities against the existential threat of corporate expropriation.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— ARMED ASCETICS TARGETED REVENUE APPARATUS</p>
                <p>— DECADES OF GUERRILLA WARFARE</p>
                <p>— ROMANTICISED IN NOVEL 'ANANDAMATH' (1882)</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 4. THE CHUAR REBELLIONS */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">TRIBAL RESISTANCE</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">THE CHUAR REBELLIONS</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">1767–1800s · JUNGLE MAHALS, BENGAL</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  Along the porous, forested frontiers of southwestern Bengal—a region designated by the British as the Jungle Mahals—the advent of Company rule precipitated a series of violent, protracted uprisings collectively termed the Chuar Rebellions. The indigenous Bhumij and other forest-dwelling tribal communities, whom the British pejoratively labeled 'Chuars' (meaning uncivilized or barbaric), fiercely resisted the imposition of an alien property system that sought to commodify their ancestral woodlands and exact unprecedented cash revenues.
                </p>
                <p>
                  For centuries, these tribal groups had maintained complex, semi-autonomous relationships with local chieftains, serving as armed retainers (paiks) in exchange for non-taxable land grants. The Company’s abrupt demand for exorbitant monetary taxes and the subsequent auctioning of defaulting estates to outside speculators shattered this socio-economic equilibrium. Led by dispossessed local chieftains like Durjan Singh of Raipur, the tribal communities launched a decentralized but devastating insurgency throughout the late eighteenth century, methodically destroying colonial police stations and revenue outposts.
                </p>
                <p>
                  The British response was characterized by overwhelming military force combined with punitive administrative measures. Whole villages were routinely razed, and tribal leaders were executed to deter future insurrections. Yet the persistence of the unrest forced the colonial state to periodically compromise, eventually enacting specific regulations for the governance of the Jungle Mahals. The Chuar resistance established an early and recurrent paradigm of the colonial encounter: the violent collision between aggressive mercantile capitalism and customary tribal economies.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— RESISTANCE TO FOREST COMMODIFICATION</p>
                <p>— INDIGENOUS COMMUNITIES VS. OUTSIDE SPECULATORS</p>
                <p>— LED BY DISPOSSESSED LOCAL CHIEFTAINS</p>
              </div>
            </aside>
          </div>
        </section>

        
        {/* ARCHIVAL PHOTO */}
        <div className="my-12 border-t border-text/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="overflow-hidden border border-text/15">
                <img
                  src="/TheImperialAudit/illustrations/dossiers/kattabomman.jpg"
                  alt="Veerapandiya Kattabomman — hanged at Kayathar, 1799"
                  className="w-full h-auto object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/40 mt-3">
                ▲ Veerapandiya Kattabomman — hanged at Kayathar, 1799
              </p>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-3 pt-2">
              <p>— Tamil Nadu State Archives</p>
              <p>— Historical archive</p>
            </aside>
          </div>
        </div>
        {/* 5. POLYGAR WARS */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">RESISTANCE · MILITARY</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">POLYGAR WARS: VEERAPANDIYA KATTABOMMAN</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">1799 · PANCHALANKURICHI, MADRAS PRESIDENCY</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  As the East India Company expanded its hegemony over the Madras Presidency, it encountered entrenched opposition from the Palayakkarars, or Polygars—powerful local chieftains who administered autonomous territories and commanded private militias. The most legendary resistance emerged from Panchalankurichi, under the defiant leadership of Veerapandiya Kattabomman. Confronted with aggressive demands for tribute by Company administrators, Kattabomman famously repudiated their authority, asserting that the British had no legitimate claim to tax the independent sovereigns of Tamil lands.
                </p>
                <div className="w-1/2 float-left mr-6 mb-4 mt-2 mb-6 ">
                  <img
                    src="/TheImperialAudit/illustrations/dossiers/kattabomman.jpg"
                    alt="Veerapandiya Kattabomman — hanged at Kayathar, 1799"
                    className="w-full h-auto object-cover object-top block"
                    style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.93)' }}
                  />
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-text/35 mt-1.5 leading-tight italic">
                    Veerapandiya Kattabomman — hanged at Kayathar, 1799
                  </p>
                </div>
                <p>
                  The conflict escalated into open warfare in 1798. Despite initial tactical successes and a daring escape from British forces at Ramnad, Kattabomman was eventually betrayed by neighboring rulers allied with the Company. He was captured in 1799 and subjected to a summary trial before being <span className="text-accent font-semibold">publicly hanged from a tamarind tree in Kayathar</span>, a deliberately theatrical execution designed to terrorize other hesitant Polygars into submission. However, his martyrdom instead ignited a broader conflagration.
                </p>
                <p>
                  Kattabomman’s associate, Oomathurai, along with the formidable Maruthu Pandiyar brothers of Sivaganga, assumed leadership of the continuing insurgency. In 1801, the Maruthu Pandiyars issued the historic Tiruchirappalli Proclamation, an extraordinary document that transcended local grievances to call for an alliance of all castes and religions against European domination—often cited by modern historians as the subcontinent's <span className="text-accent font-semibold">first definitive call for independence</span>. The rebellion was eventually crushed by massive Company artillery, resulting in mass executions and the systematic dismantling of Polygar forts across southern India.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— KATTABOMMAN HANGED PUBLICLY IN 1799</p>
                <p>— TIRUCHIRAPPALLI PROCLAMATION (1801)</p>
                <p>— FIRST ALL-CASTE CALL AGAINST COLONIAL RULE</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 6. VELLORE MUTINY */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">MILITARY · REBELLION</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">VELLORE MUTINY</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">10 JULY 1806 · VELLORE, MADRAS PRESIDENCY</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  Decades before the eruption of 1857, the vulnerability of the Company’s military apparatus was violently exposed within the heavy stone walls of Vellore Fort. On the dawn of 10 July 1806, Indian sepoys of the Madras Army launched a meticulously coordinated and entirely unexpected assault on their British commanding officers and the European garrison. The catalyst for this sudden explosion of violence was a seemingly trivial administrative order that mandated severe cultural erasure within the ranks.
                </p>
                <p>
                  The Commander-in-Chief of the Madras Army had instituted draconian new dress regulations intended to impose a homogenized, European appearance upon the indigenous troops. Hindu soldiers were strictly prohibited from wearing religious caste marks on their foreheads or adorning themselves with traditional jewelry, while Muslim sepoys were required to trim their beards in a specific manner. Furthermore, the traditional turban was forcibly replaced with a round hat possessing a leather cockade, which many soldiers believed contained offensive animal hide. To the sepoys, these regulations represented a systemic assault on their religious identities and a covert prelude to forced Christian conversion.
                </p>
                <p>
                  The mutineers rapidly seized control of the fort, raising the flag of the erstwhile Tipu Sultan, whose exiled sons were imprisoned within the citadel. Between 100 and 200 British officers and soldiers were killed in the initial uprising. The British response was swift and merciless. Relief forces arrived from Arcot, brutally storming the fort and executing approximately 350 sepoys in the immediate aftermath, many blown from the mouths of cannons. While the Company abruptly reversed the dress code and recalled the commanding general to London, the Vellore Mutiny chillingly foreshadowed the deep-seated religious and cultural anxieties that would fracture the empire fifty years later.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— TRIGGERED BY INSENSITIVE DRESS REGULATIONS</p>
                <p>— 100-200 BRITISH KILLED</p>
                <p>— 350 SEPOYS EXECUTED IN REPRISAL</p>
              </div>
            </aside>
          </div>
        </section>

        
        {/* ARCHIVAL PHOTO */}
        <div className="my-12 border-t border-text/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="overflow-hidden border border-text/15">
                <img
                  src="/TheImperialAudit/illustrations/dossiers/clive.jpg"
                  alt="Robert Clive, 1st Baron Clive of Plassey — architect of Company conquest"
                  className="w-full h-auto object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/40 mt-3">
                ▲ Robert Clive, 1st Baron Clive of Plassey — architect of Company conquest
              </p>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-3 pt-2">
              <p>— National Portrait Gallery, London</p>
              <p>— Historical archive</p>
            </aside>
          </div>
        </div>
        {/* 7. PAIKA REBELLION */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">REBELLION · MILITARY</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">PAIKA REBELLION</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">1817 · KHURDA, ODISHA (BENGAL PRESIDENCY)</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                
                <div className="w-full sm:w-[48%] float-left mr-6 mb-6 mt-2 clear-left">
                  <img
                    src="/TheImperialAudit/illustrations/dossiers/pazhassi.jpg"
                    alt="Pazhassi Raja (Kerala Varma) — led the Cotiote guerrilla war against the Company in Wayanad jungles (1793–1805)"
                    className="w-full h-auto max-h-[280px] object-contain block"
                    style={{ filter: 'grayscale(100%) contrast(1.12) brightness(0.93)' }}
                  />
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-text/40 mt-1.5 leading-tight italic">
                    ▲ Pazhassi Raja (Kerala Varma) — led the Cotiote guerrilla war against the Company in Wayanad jungles (1793–1805)
                  </p>
                </div>
                <p>
                  The Paikas were a traditional warrior-landholding community in coastal Odisha who, for generations, had served the Gajapati rulers of Khurda as a hereditary rural militia. In exchange for their martial services, they held extensive tracts of rent-free lands known as <i>nishkar jagirs</i>. When the East India Company conquered Odisha in 1803, it swiftly imposed its rigid utilitarian logic upon this ancient social structure. The new British administration ruthlessly abolished the Paikas' hereditary land rights, demanding extortionate cash revenues and driving the formerly proud warrior caste into severe destitution.
                </p>
                <p>
                  In 1817, this simmering socio-economic resentment detonated into a massive regional insurrection. Under the formidable leadership of <span className="text-accent font-semibold">Bakshi Jagabandhu Bidyadhar</span>, the former military commander of the King of Khurda, the Paikas rose in armed rebellion. They methodically targeted the symbols of colonial oppression: police stations, administrative offices, and the hated salt monopoly headquarters. The uprising rapidly transcended class lines, garnering widespread support from dispossessed zamindars, heavily taxed peasants, and indigenous tribal groups, spreading uncontrollably across Khurda, Puri, and Cuttack.
                </p>
                <p>
                  The Company was temporarily paralyzed by the scale and velocity of the resistance, forcing the deployment of large military detachments to regain control. The suppression of the rebellion was protracted and brutal. Bakshi Jagabandhu conducted a resilient guerrilla campaign from the dense jungles for several years before ultimately surrendering; he died as a state prisoner in Cuttack. Pre-dating the Great Rebellion of 1857 by exactly four decades, the Paika Bidroha stands as a critical demonstration of how radical colonial restructuring of land tenure consistently provoked fierce agrarian-military resistance.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— TRADITIONAL WARRIOR CASTE DISPOSSESSED</p>
                <p>— WIDESPREAD REGIONAL UPRISING</p>
                <p>— PRE-DATES 1857 BY 40 YEARS</p>
              </div>
            </aside>
          </div>
        </section>

        
        {/* ARCHIVAL PHOTO */}
        <div className="my-12 border-t border-text/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="overflow-hidden border border-text/15">
                <img
                  src="/TheImperialAudit/illustrations/dossiers/chennamma.jpg"
                  alt="Rani Chennamma of Kittur — imprisoned at Bailhongal Fort, died 1829"
                  className="w-full h-auto object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/40 mt-3">
                ▲ Rani Chennamma of Kittur — imprisoned at Bailhongal Fort, died 1829
              </p>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-3 pt-2">
              <p>— Karnataka State Archives</p>
              <p>— Historical archive</p>
            </aside>
          </div>
        </div>
        {/* 8. KITTUR REBELLION */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">REBELLION · MILITARY</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">KITTUR REBELLION</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">1824 · KITTUR, KARNATAKA (BOMBAY PRESIDENCY)</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  Long before Lord Dalhousie formalized the notorious "Doctrine of Lapse," the East India Company violently tested the principle of arbitrary annexation on the small, prosperous principality of Kittur in northern Karnataka. Following the death of Raja Mallasarja and his legitimate heir, his formidable widow, Rani Chennamma, adopted a son to succeed to the throne, adhering strictly to Hindu customary law. The British administration, however, explicitly refused to recognize the adoption, decreeing that Kittur would be immediately absorbed into the Bombay Presidency.
                </p>
                <p>
                  Refusing to capitulate to the expropriation of her state, Rani Chennamma chose armed defiance. In October 1824, when the aggressive British Political Agent St. John Thackeray arrived with troops to seize the Kittur treasury and forcefully implement the annexation, the Rani’s loyal forces ambushed the detachment. The ensuing Battle of Kittur was a catastrophic humiliation for the Company; Thackeray was killed in the fighting, and several senior British officers were taken hostage within the walls of Kittur Fort.
                </p>
                <p>
                  The British response to this localized defiance was characterized by disproportionate martial retaliation. Amassing an overwhelmingly superior force equipped with heavy artillery, the Company besieged the fort. Despite fiercely directing the defense herself, Rani Chennamma was eventually defeated by betrayal from within her ranks and captured. She was imprisoned at Bailhongal Fort, where she died in 1829. Her resistance remains immensely significant as one of the earliest armed rejections of the East India Company's legal machinations to annex princely states through the denial of customary succession.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— EARLY USE OF DOCTRINE OF LAPSE MECHANISM</p>
                <p>— BRITISH POLITICAL AGENT KILLED IN BATTLE</p>
                <p>— RANI CHENNAMMA DIED IN IMPRISONMENT (1829)</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 9. BHIL AND KOL UPRISINGS */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">TRIBAL RESISTANCE</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">BHIL AND KOL UPRISINGS</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">1819–1839 · KHANDESH / CHOTA NAGPUR</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  The expansion of the colonial frontier frequently encroached upon rugged, forested terrains inhabited by fiercely independent indigenous communities. This collision precipitated decades of unrelenting tribal warfare. In the Khandesh and Satpura regions, the Bhil communities rose in sustained resistance from 1819 to 1825. Facing the influx of outsiders and the stringent imposition of British agricultural taxation, various Bhil chiefs utilized their intimate knowledge of the mountainous terrain to wage highly effective guerrilla campaigns against Company supply lines and administrative outposts.
                </p>
                <p>
                  Simultaneously, a more massive conflagration engulfed the Chota Nagpur plateau in 1831-32, known historically as the Kol Uprising. The indigenous Munda, Ho, and Oraon tribes found themselves systematically dispossessed of their ancestral lands by Hindu, Sikh, and Muslim middlemen—zamindars and moneylenders (dikus) who had penetrated the region under the legal protection of Company courts. Under the leadership of Buddhu Bhagat, the tribes launched a devastatingly violent insurrection to purge these exploitative outsiders from their territories, indiscriminately burning newly established estates and targeting the symbols of the colonial judiciary.
                </p>
                <p>
                  The Ho community of neighboring Singhbhum similarly fought a bitter, protracted war against annexation from 1820 until their final subjugation in 1837. The East India Company struggled to pacify these uprisings through conventional military means alone. Eventually, the colonial state adopted a dual strategy of brutal military repression combined with strategic co-optation, most notably creating the Bhil Corps—recruiting the very tribesmen they had fought into irregular paramilitary units designed to police their own territories and secure British authority.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— RESISTANCE AGAINST OUTSIDE MONEYLENDERS (DIKUS)</p>
                <p>— DECADES OF GUERRILLA WARFARE</p>
                <p>— CREATION OF THE PACIFYING BHIL CORPS</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 10. FIRST AND SECOND ANGLO-SIKH WARS */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">CONQUEST · MILITARY</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">FIRST AND SECOND ANGLO-SIKH WARS</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">1845–1849 · PUNJAB</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  The Sikh Empire of Maharaja Ranjit Singh stood for decades as the final formidable bulwark against complete British domination of the subcontinent. Following the Maharaja's death in 1839, the kingdom descended into factional instability, providing the East India Company with the pretext for aggressive military intervention. The First Anglo-Sikh War (1845–46) witnessed some of the most phenomenally bloody engagements in colonial history at Mudki, Ferozeshah, Aliwal, and Sobraon. The fierce and highly disciplined Khalsa army inflicted staggering casualties upon the British before ultimately succumbing to the treacherous collusion of their own elite commanders with the Company.
                </p>
                <p>
                  The punitive <span className="text-accent font-semibold">Treaty of Lahore in 1846</span> violently dismembered the Sikh state. In a transaction of breath-taking imperial cynicism, the British severed the province of Kashmir and <span className="text-accent font-semibold">sold it outright to Gulab Singh for 75 lakh rupees</span> via the Treaty of Amritsar, effectively treating entire populations as commodified real estate. However, peace proved transient. Resentment against the overbearing British residency and severe reductions in the Khalsa army rapidly coalesced into renewed resistance, triggered initially by rebellions in Multan and Hazara.
                </p>
                <p>
                  The Second Anglo-Sikh War (1848–49) pushed Company forces to the absolute brink of defeat, particularly at the devastating Battle of Chillianwala, before the British secured a decisive victory at Gujrat. The aftermath was uncompromising. <span className="text-accent font-semibold">Ten-year-old Maharaja Dalip Singh was deposed</span> and exiled to Britain. The legendary <span className="text-accent font-semibold">Koh-i-Noor diamond was seized</span> and presented to Queen Victoria. The Punjab was formally annexed into the British Empire, marking the final destruction of the last major independent indigenous power in India.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— KASHMIR SOLD FOR 75 LAKH RUPEES</p>
                <p>— MAHARAJA DALIP SINGH DEPOSED AT AGE 10</p>
                <p>— KOH-I-NOOR SEIZED FOR QUEEN VICTORIA</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 11. ANNEXATION OF AWADH */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">CONQUEST · DIPLOMATIC</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">ANNEXATION OF AWADH</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">1856 · LUCKNOW, AWADH (MODERN UTTAR PRADESH)</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  If the Punjab was conquered through the grim attrition of artillery, the prosperous kingdom of Awadh was consumed by the stroke of a bureaucratic pen. For over half a century, Awadh had functioned as the most loyal and financially lucrative ally of the East India Company, bound by a Treaty in 1801 that explicitly guaranteed its sovereignty. Yet, in February 1856, Governor-General Lord Dalhousie unilaterally abrogated this historic treaty, formally deposing the reigning Nawab, Wajid Ali Shah, on vaguely defined charges of chronic "misgovernment" and internal corruption.
                </p>
                <p>
                  The annexation sent profound shockwaves through northern India. Wajid Ali Shah, profoundly humiliated but refusing to sign away his kingdom, was summarily exiled to the damp environs of Metiabruz, Calcutta. However, the most explosive consequences were felt within the ranks of the East India Company's own Bengal Army. Awadh was effectively the nursery of the Company's military power; approximately 40,000 Indian sepoys hailed from the kingdom's rural aristocracy and landed peasant classes. The sudden dissolution of their sovereign state abruptly transformed their families from privileged subjects into overtaxed peasants under direct colonial administration.
                </p>
                <p>
                  The annexation destroyed the complex prestige and material benefits these soldiers had previously enjoyed, casting their pensions and customary privileges into immediate jeopardy. Furthermore, the arbitrary nature of the annexation convinced the Indian populace that British diplomatic promises were entirely hollow. By alienating the very military foundation upon which its power rested, the annexation of Awadh acted as the definitive catalyst that turned long-simmering discontent into the massive military and civilian explosion of 1857.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— TREATY OF 1801 UNILATERALLY ABROGATED</p>
                <p>— 40,000 SEPOYS' STATUS THREATENED</p>
                <p>— WIDESPREAD PERCEPTION OF BRITISH TREACHERY</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 12. SANTHAL HUL */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">TRIBAL RESISTANCE · REBELLION</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">SANTHAL HUL</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text/40 mb-8">1855–56 · SANTHAL PARGANAS, RAJMAHAL HILLS</p>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  On the eve of the Great Rebellion, the colonial state faced its most ferocious agrarian uprising in the forested Rajmahal Hills. The Santhal Hul (rebellion) was a desperate, messianic uprising against a suffocating nexus of exploitation forged by the colonial administration, corrupt police officers, rapacious zamindars, and predatory moneylenders (mahajans). Driven into crippling, intergenerational debt by extortionate interest rates—often exceeding 500 percent—the Santhals found themselves legally dispossessed of their lands by British courts that uniformly favored the literate elites.
                </p>
                <p>
                  In June 1855, claiming direct divine mandate, two brothers, <span className="text-accent font-semibold">Sidhu and Kanhu Murmu mobilized over 10,000 Santhals</span>. Their directive was violently absolute: "Our Thakur [God] has ordered: kill the white men and the mahajans." Armed predominantly with bows, arrows, and axes, the Santhals systematically annihilated moneylenders, slaughtered corrupt officials, and destroyed the infrastructure of colonial modernity, heavily targeting the new railway lines that symbolized their economic subjugation. For months, they effectively extinguished British authority across a vast tract of territory.
                </p>
                <p>
                  The East India Company reacted with overwhelming, industrialized martial violence, declaring martial law and deploying infantry regiments armed with modern musketry. The conflict evolved into a massacre. Sidhu and Kanhu were captured and killed, and contemporary estimates suggest that <span className="text-accent font-bold">between 10,000 and 20,000 Santhals were slaughtered</span>. Despite the horrific cost, the Hul forced an administrative reckoning; the British were compelled to carve out the distinct district of the Santhal Parganas and enact specific tenancy laws in a belated attempt to protect tribal lands from absolute alienation.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— 10,000+ ARMED REBELS MOBILISED</p>
                <p>— ESTIMATED 10,000–20,000 FATALITIES</p>
                <p>— LED TO PROTECTIVE TENANCY LEGISLATION</p>
              </div>
            </aside>
          </div>
        </section>

        {/* THE FISCAL ARCHITECTURE OF DRAIN */}
        <section className="py-12 border-t border-text/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/40 mb-6">ECONOMIC ANALYSIS</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-8">THE FISCAL ARCHITECTURE OF DRAIN</h3>
              <div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
                <p>
                  The physical conquest of the subcontinent was intrinsically tethered to the establishment of an unprecedented engine of wealth extraction. Unlike previous empires that integrated into the Indian economy, the East India Company instituted a unilateral transfer of wealth out of the territory, profoundly altering the global economic balance. This structural haemorrhaging of capital was formalized through the Diwani mechanism, wherein Indian land revenues were utilized to purchase Indian goods for export, effectively meaning the Company acquired vast quantities of commodities entirely free of charge.
                </p>
                <p>
                  This system was further institutionalized through 'Home Charges' and the mechanism of <span className="text-accent font-semibold">Council Bills</span>. The <span className="text-accent font-semibold">Home Charges</span> comprised the dividends paid to Company shareholders, interest on the debt accrued to conquer India, and the exorbitant pensions of retired colonial officials living in Britain. To facilitate this transfer without shipping physical bullion, foreign merchants bought Council Bills in London using gold or sterling. They presented these bills in India to purchase local goods, and the colonial state redeemed the bills using tax revenue squeezed from the Indian peasantry. 
                </p>
                <p>
                  This relentless economic siphoning was famously articulated by Dadabhai Naoroji as the "Drain of Wealth" theory in his seminal 1901 work, <span className="text-accent font-semibold">Poverty and Un-British Rule in India</span>. While quantifying the exact scale of this historical extraction remains a complex historiographical challenge, modern economic historians, most notably Utsa Patnaik, have controversially calculated the total value of this colonial drain to be in the region of <span className="text-accent font-bold">~$45 trillion in present-day terms</span>. Regardless of the precise monetary calculation, the fiscal architecture established during this century of conquest structurally impoverished the subcontinent while fundamentally capitalizing the British industrial revolution.
                </p>
              </div>
            </div>
            <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
              <div className="p-8 bg-accent/[0.04] border border-accent/30 space-y-4">
                <p>— SYSTEMIC WEALTH EXTRACTION</p>
                <p>— COUNCIL BILLS FINANCED EXPORTS WITH LOCAL TAXES</p>
                <p>— MODERN ESTIMATES SUGGEST TRILLIONS DRAINED</p>
              </div>
            </aside>
          </div>
        </section>

        <hr className="border-t border-text/10 my-24" />

        {/* Footer Navigation */}
        <footer className="flex justify-end pb-12">
          <Link 
            href="/en/chapters/comparison" 
            className="font-mono text-[10px] text-text/40 hover:text-text uppercase tracking-[0.15em] transition-colors flex items-center gap-4 group"
          >
            <span>NEXT CHAPTER: 1857</span>
            <span className="w-12 h-[1px] bg-text/20 group-hover:bg-text group-hover:w-16 transition-all duration-300"></span>
          </Link>
        </footer>

      </main>
    </div>
  );
}
