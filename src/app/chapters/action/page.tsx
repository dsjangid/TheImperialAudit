import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';
import { sourcesList } from '@/data/sources';

export default function ArchiveChapterPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-[#F2F2F2] selection:bg-[#FF0000]/20 pb-32">
      <Navbar lang="en" />
      <PageCornerBadges fileNo="005" chapterTitle="ARCHIVE" pageNum="156" totalPages="190" />
      
      <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-28 md:pt-32">
        
        {/* Chapter Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 mt-20">
          <div className="md:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text/40 mb-4">CHAPTER 05</p>
            <h1 
              className="font-serif text-text text-[clamp(36px,8.2vw,116px)] leading-[0.95] tracking-[0]" 
              style={{fontVariationSettings:'"opsz" 60', fontWeight: 900}}
            >
              05 ARCHIVE
            </h1>
          </div>
          <aside className="md:col-start-10 md:col-span-3 font-mono text-[11px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-12 md:pt-0 flex flex-col justify-end pb-4">
            <p>— 32 primary sources · 47 incidents · 190 years</p>
          </aside>
        </div>

        {/* Introduction */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
            <p>
              This archive draws on verified primary and secondary sources. Every significant claim in the preceding chapters can be traced to a documented source. Where historians disagree, this archive has attempted to represent the range of scholarly interpretation rather than present one reading as definitive.
            </p>
            <p>
              The compilation process privileges comprehensive cross-referencing between official colonial records and vernacular histories. By juxtaposing the sterile, bureaucratic language of imperial administration with the lived experiences documented in regional archives, a more complete picture of the colonial era emerges.
            </p>
          </div>
        </section>

        
        {/* ARCHIVAL PHOTO GALLERY */}
        <section className="py-12 border-t border-text/10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/40 mb-6">
            — 05.0 / ARCHIVAL PHOTOGRAPHS
          </p>
          <h2 className="font-serif text-[32px] md:text-[48px] font-bold leading-tight mb-4">
            THE ARCHIVE IN IMAGES
          </h2>
          <p className="font-serif italic text-[17px] text-text/65 max-w-[65ch] mb-10 leading-relaxed">
            The following photographs are drawn from archival collections at the British Library, National Archives (Kew), National Archives of India, and regional state archives. Each is rendered in high-contrast monochrome, as in the original prints.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: '/TheImperialAudit/illustrations/dossiers/gandhi.jpg', cap: 'Gandhi — Dandi Salt March, 1930', yr: '1930' },
              { src: '/TheImperialAudit/illustrations/dossiers/bhagat.jpg', cap: 'Shaheed Bhagat Singh — HSRA', yr: '1929' },
              { src: '/TheImperialAudit/illustrations/dossiers/bose.jpg', cap: 'Netaji Subhas Chandra Bose — INA', yr: '1942' },
              { src: '/TheImperialAudit/illustrations/dossiers/lakshmibai.jpg', cap: 'Rani Lakshmibai of Jhansi', yr: '1857' },
              { src: '/TheImperialAudit/illustrations/dossiers/tilak.jpg', cap: 'Bal Gangadhar Tilak', yr: '1897' },
              { src: '/TheImperialAudit/illustrations/dossiers/birsa.jpg', cap: 'Bhagwan Birsa Munda — Ulgulan', yr: '1899' },
              { src: '/TheImperialAudit/illustrations/dossiers/jallianwala_bullet_marks.jpg', cap: 'Jallianwala Bagh — bullet marks', yr: '1919' },
              { src: '/TheImperialAudit/illustrations/dossiers/dandi_march.jpg', cap: 'The Dandi Salt March', yr: '1930' },
              { src: '/TheImperialAudit/illustrations/dossiers/azad.jpg', cap: 'Chandrashekhar Azad — HSRA', yr: '1931' },
              { src: '/TheImperialAudit/illustrations/dossiers/suryasen.jpg', cap: 'Masterda Surya Sen — Chittagong', yr: '1930' },
              { src: '/TheImperialAudit/illustrations/dossiers/udham.jpg', cap: 'Udham Singh — Old Bailey trial', yr: '1940' },
              { src: '/TheImperialAudit/illustrations/dossiers/ina_trials.jpg', cap: 'INA Trials — Red Fort, Delhi', yr: '1945' },
            ].map((img) => (
              <div key={img.src} className="border border-text/15 overflow-hidden group">
                <div className="overflow-hidden aspect-[4/5]">
                  <img
                    src={img.src}
                    alt={img.cap}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
                  />
                </div>
                <div className="p-3 border-t border-text/10">
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-text/40">{img.yr}</p>
                  <p className="font-serif text-[13px] text-text/75 mt-1 leading-snug">{img.cap}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-t border-text/10 my-12" />

        {/* Section 1: The Regional Incident Explorer */}
        <section>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/40 mb-6">SECTION 1: THE REGIONAL INCIDENT EXPLORER</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Bengal */}
            <div className="p-6 border border-text/15 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF0000] mb-3">REGION</p>
              <h3 className="font-serif text-[20px] font-bold mb-4">BENGAL (West Bengal & Bangladesh)</h3>
              <p className="font-serif text-[14px] text-text/65 leading-relaxed mb-4">
                The crucible of British power in India, Bengal witnessed both the earliest corporate plunder and the first organized intellectual resistance. It bore the brunt of multiple devastating famines alongside fierce political awakenings.
              </p>
              <div className="space-y-2 mt-4">
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">23 June 1757 · Battle of Plassey</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1770 · Bengal Famine (<span className="text-accent font-bold">est. 7-10 million dead</span>)</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1859-60 · Indigo Revolt (nil-vidroh)</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1905 · Partition of Bengal</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1943 · Bengal Famine (<span className="text-accent font-bold">est. 2-3 million dead</span>)</p>
              </div>
            </div>

            {/* Punjab */}
            <div className="p-6 border border-text/15 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF0000] mb-3">REGION</p>
              <h3 className="font-serif text-[20px] font-bold mb-4">PUNJAB</h3>
              <p className="font-serif text-[14px] text-text/65 leading-relaxed mb-4">
                One of the last major regions annexed by the Company, Punjab became a vital military recruiting ground. It subsequently emerged as a focal point for intense revolutionary activity and suffered deeply during Partition.
              </p>
              <div className="space-y-2 mt-4">
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1845-46 · First Anglo-Sikh War</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1848-49 · Second Anglo-Sikh War & Annexation</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]"><span className="text-accent font-semibold">13 April 1919 · Jallianwala Bagh Massacre</span></p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1929-31 · Lahore Conspiracy Case (Bhagat Singh)</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1947 · Partition massacres</p>
              </div>
            </div>

            {/* Uttar Pradesh */}
            <div className="p-6 border border-text/15 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF0000] mb-3">REGION</p>
              <h3 className="font-serif text-[20px] font-bold mb-4">UTTAR PRADESH (United Provinces)</h3>
              <p className="font-serif text-[14px] text-text/65 leading-relaxed mb-4">
                The heartland of the 1857 Uprising, this region saw some of the most brutal fighting and subsequent colonial reprisals. It remained central to both nationalist politics and revolutionary underground networks.
              </p>
              <div className="space-y-2 mt-4">
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]"><span className="text-accent font-semibold">10 May 1857 · Meerut Mutiny</span></p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">June-July 1857 · Kanpur Siege & Bibighar</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">June 1857-March 1858 · Lucknow Siege</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">4 February 1922 · Chauri Chaura</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">9 August 1925 · Kakori Train Action</p>
              </div>
            </div>

            {/* Odisha */}
            <div className="p-6 border border-text/15 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF0000] mb-3">REGION</p>
              <h3 className="font-serif text-[20px] font-bold mb-4">ODISHA</h3>
              <p className="font-serif text-[14px] text-text/65 leading-relaxed mb-4">
                Odisha saw early and sustained armed resistance from its martial classes and tribal populations. The devastating colonial policies of the 19th century culminated in one of the century's worst demographic catastrophes.
              </p>
              <div className="space-y-2 mt-4">
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1817 · Paika Rebellion (Bakshi Jagabandhu)</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1827-1864 · Veer Surendra Sai resistance</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1866 · Great Orissa Famine</p>
              </div>
            </div>

            {/* Maharashtra */}
            <div className="p-6 border border-text/15 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF0000] mb-3">REGION</p>
              <h3 className="font-serif text-[20px] font-bold mb-4">MAHARASHTRA</h3>
              <p className="font-serif text-[14px] text-text/65 leading-relaxed mb-4">
                Following the defeat of the Maratha Confederacy, this region fostered pioneering social reform and militant nationalism. Its agrarian and industrial sectors frequently clashed with colonial economic policies.
              </p>
              <div className="space-y-2 mt-4">
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1817-18 · Anglo-Maratha Wars (Third)</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1875 · Deccan Riots</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1897 · Chapekar Brothers: assassination of Rand</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1930 · Sholapur Uprising</p>
              </div>
            </div>

            {/* Tamil Nadu */}
            <div className="p-6 border border-text/15 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF0000] mb-3">REGION</p>
              <h3 className="font-serif text-[20px] font-bold mb-4">TAMIL NADU (Madras Presidency)</h3>
              <p className="font-serif text-[14px] text-text/65 leading-relaxed mb-4">
                The southern presidency experienced profound transformations under early colonial rule. It birthed significant early mutinies and later pioneered indigenous industrial strikes and mass civil disobedience.
              </p>
              <div className="space-y-2 mt-4">
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1799 · Polygar Wars: Kattabomman hanged</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1806 · Vellore Mutiny</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1908 · Tuticorin Mill Strike (VOC)</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1930 · Vedaranyam Salt Satyagraha</p>
              </div>
            </div>

            {/* Kerala */}
            <div className="p-6 border border-text/15 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF0000] mb-3">REGION</p>
              <h3 className="font-serif text-[20px] font-bold mb-4">KERALA / MALABAR</h3>
              <p className="font-serif text-[14px] text-text/65 leading-relaxed mb-4">
                Defined by prolonged guerrilla resistance against early British incursions. The 20th century saw intersecting agrarian grievances, anti-colonial rebellion, and pioneering movements against caste discrimination.
              </p>
              <div className="space-y-2 mt-4">
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1793-1805 · Pazhassi Raja guerrilla war</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1921 · Malabar Rebellion</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1921 · Wagon Tragedy (64 prisoners suffocated)</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1924-25 · Vaikom Satyagraha</p>
              </div>
            </div>

            {/* Gujarat */}
            <div className="p-6 border border-text/15 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF0000] mb-3">REGION</p>
              <h3 className="font-serif text-[20px] font-bold mb-4">GUJARAT</h3>
              <p className="font-serif text-[14px] text-text/65 leading-relaxed mb-4">
                The laboratory for Gandhian mass mobilization. Gujarat's peasant communities formed the vanguard of non-violent civil disobedience, orchestrating disciplined strikes against colonial taxation and monopolies.
              </p>
              <div className="space-y-2 mt-4">
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1918 · Kheda Satyagraha</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">12 March-6 April 1930 · Dandi Salt March</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">May 1930 · Dharasana Salt Works raid</p>
              </div>
            </div>

            {/* Assam & Northeast */}
            <div className="p-6 border border-text/15 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF0000] mb-3">REGION</p>
              <h3 className="font-serif text-[20px] font-bold mb-4">ASSAM & NORTHEAST</h3>
              <p className="font-serif text-[14px] text-text/65 leading-relaxed mb-4">
                A frontier region marked by early indigenous resistance to tea plantation encroachment. The later phases of the freedom struggle saw remarkable youth participation and profound peasant mobilization against crushing revenue demands.
              </p>
              <div className="space-y-2 mt-4">
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1829-33 · Anglo-Khasi War (U Tirot Sing)</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1894 · Patharughat Peasant Massacre</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1942 · Kanaklata Barua (17-year-old martyr)</p>
              </div>
            </div>

            {/* NWFP */}
            <div className="p-6 border border-text/15 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF0000] mb-3">REGION</p>
              <h3 className="font-serif text-[20px] font-bold mb-4">NWFP</h3>
              <p className="font-serif text-[14px] text-text/65 leading-relaxed mb-4">
                A highly militarized frontier that produced one of the most remarkable non-violent movements of the 20th century. The region faced severe and frequent colonial military repressions.
              </p>
              <div className="space-y-2 mt-4">
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">1929-47 · Khan Abdul Ghaffar Khan & Khudai Khidmatgar</p>
                <p className="font-mono text-[11px] text-text/60 uppercase tracking-[0.1em]">23 April 1930 · Qissa Khwani Bazaar Massacre (est. 200-400 killed)</p>
              </div>
            </div>

          </div>
        </section>

        <hr className="border-t border-text/10 my-12" />

        {/* Section 2: Incident Categories */}
        <section>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/40 mb-6">SECTION 2: INCIDENT CATEGORIES</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            
            <div className="p-4 border border-text/15">
              <p className="font-mono text-[10px] text-[#FF0000] uppercase tracking-[0.15em]">12 INCIDENTS</p>
              <p className="font-serif text-[18px] font-bold mt-1">CONQUEST</p>
              <p className="font-mono text-[11px] text-text/45 mt-2 uppercase tracking-[0.1em]">First contact, annexations, wars of expansion</p>
            </div>

            <div className="p-4 border border-text/15">
              <p className="font-mono text-[10px] text-[#FF0000] uppercase tracking-[0.15em]">23 INCIDENTS</p>
              <p className="font-serif text-[18px] font-bold mt-1">REBELLION</p>
              <p className="font-mono text-[11px] text-text/45 mt-2 uppercase tracking-[0.1em]">Armed uprisings against Company or Crown</p>
            </div>

            <div className="p-4 border border-text/15">
              <p className="font-mono text-[10px] text-[#FF0000] uppercase tracking-[0.15em]">18 INCIDENTS</p>
              <p className="font-serif text-[18px] font-bold mt-1">TRIBAL RESISTANCE</p>
              <p className="font-mono text-[11px] text-text/45 mt-2 uppercase tracking-[0.1em]">Adivasi and forest community uprisings</p>
            </div>

            <div className="p-4 border border-text/15">
              <p className="font-mono text-[10px] text-[#FF0000] uppercase tracking-[0.15em]">9 INCIDENTS</p>
              <p className="font-serif text-[18px] font-bold mt-1">PEASANT MOVEMENT</p>
              <p className="font-mono text-[11px] text-text/45 mt-2 uppercase tracking-[0.1em]">Agrarian protest and tenant revolts</p>
            </div>

            <div className="p-4 border border-text/15">
              <p className="font-mono text-[10px] text-[#FF0000] uppercase tracking-[0.15em]">6 INCIDENTS</p>
              <p className="font-serif text-[18px] font-bold mt-1">LABOUR</p>
              <p className="font-mono text-[11px] text-text/45 mt-2 uppercase tracking-[0.1em]">Industrial and plantation worker resistance</p>
            </div>

            <div className="p-4 border border-text/15">
              <p className="font-mono text-[10px] text-[#FF0000] uppercase tracking-[0.15em]">14 INCIDENTS</p>
              <p className="font-serif text-[18px] font-bold mt-1">REVOLUTIONARY</p>
              <p className="font-mono text-[11px] text-text/45 mt-2 uppercase tracking-[0.1em]">Underground networks, bombings, assassinations</p>
            </div>

            <div className="p-4 border border-text/15">
              <p className="font-mono text-[10px] text-[#FF0000] uppercase tracking-[0.15em]">8 INCIDENTS</p>
              <p className="font-serif text-[18px] font-bold mt-1">FAMINE</p>
              <p className="font-mono text-[11px] text-text/45 mt-2 uppercase tracking-[0.1em]">Documented colonial-era famines with policy dimensions</p>
            </div>

            <div className="p-4 border border-text/15">
              <p className="font-mono text-[10px] text-[#FF0000] uppercase tracking-[0.15em]">11 INCIDENTS</p>
              <p className="font-serif text-[18px] font-bold mt-1">COLONIAL REPRESSION</p>
              <p className="font-mono text-[11px] text-text/45 mt-2 uppercase tracking-[0.1em]">Official violence against civilians</p>
            </div>

            <div className="p-4 border border-text/15">
              <p className="font-mono text-[10px] text-[#FF0000] uppercase tracking-[0.15em]">7 INCIDENTS</p>
              <p className="font-serif text-[18px] font-bold mt-1">CONSTITUTIONAL</p>
              <p className="font-mono text-[11px] text-text/45 mt-2 uppercase tracking-[0.1em]">Law, policy, elections</p>
            </div>

          </div>
        </section>

        <hr className="border-t border-text/10 my-12" />

        {/* Section 3: Sources Registry */}
        <section>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/40 mb-6">SECTION 3: SOURCES REGISTRY</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sourcesList?.map((src: any, i: number) => (
              <a key={i} href={src.url} target="_blank" rel="noreferrer"
                className="p-6 border border-text/15 hover:border-[#FF0000] transition-colors block group"
                data-cursor="accent">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-[#FF0000] uppercase tracking-[0.2em]">{src.verifiedStatus}</span>
                  <span className="font-mono text-[12px] opacity-40 group-hover:opacity-100 transition-opacity">↗</span>
                </div>
                <h3 className="font-serif text-[22px] font-bold mt-3 group-hover:text-[#FF0000] transition-colors">{src.name}</h3>
                <p className="font-serif text-text/70 text-[15px] mt-2 leading-relaxed">{src.shortDesc?.en}</p>
              </a>
            ))}
          </div>
        </section>

        <hr className="border-t border-text/10 my-12" />

        {/* Section 4: A Note on Historiography */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-20">
          <div className="md:col-span-8 space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/40 mb-6">SECTION 4: A NOTE ON HISTORIOGRAPHY</p>
            <p>
              The Cambridge School vs. Subaltern Studies: The historiography of colonial India has long been defined by a tension between differing schools of thought. Historians of the Cambridge School, including Anil Seal, John Gallagher, and Ronald Robinson, argued that Indian nationalism was largely an elite phenomenon, driven by localized power struggles and competition for patronage rather than unified ideology. In stark contrast, Ranajit Guha and the Subaltern Studies collective revolutionized the field by recovering the history of peasants, tribals, and women, arguing that subaltern groups possessed their own autonomous domain of politics distinct from elite nationalism.
            </p>
            <p>
              The question of intent vs. structure in colonial violence remains another critical axis of debate. Was colonial violence the result of individual decisions and "bad apples" (like Brigadier-General Dyer at Jallianwala Bagh), or was it systematically built into the very mechanisms of revenue extraction and imperial control? Both Mike Davis, examining late Victorian famines as structured political economy, and Sanjay Subrahmanyam, situating colonial power in long-term institutional contexts, have deeply contributed to understanding how structural violence operated beneath the veneer of administrative rule.
            </p>
            <p>
              Finally, issues of memory and archives continue to shape how this history is written. The India Office Records offer an astoundingly comprehensive view of administrative and military history, yet they are structurally thin on the lived experiences of the governed. Vernacular sources—regional newspapers, private letters, oral histories, and folk songs—are vital to filling this gap, providing a counter-narrative to imperial claims, though they remain unevenly preserved and less accessible in traditional archival frameworks.
            </p>
          </div>
        </section>

        {/* Footer Nav */}
        <div className="flex justify-start border-t border-text/10 pt-8">
          <Link href="/en" className="font-mono text-[11px] uppercase tracking-[0.2em] text-text/40 hover:text-text transition-colors">
            ↑ HOME
          </Link>
        </div>

      </div>
    </main>
  );
}
