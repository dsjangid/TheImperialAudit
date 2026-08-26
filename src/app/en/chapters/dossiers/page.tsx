import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PageCornerBadges } from '@/components/PageCornerBadges';

export default function SubjectsChapterPage() {
 return (
<div className="min-h-screen bg-bg selection:bg-accent/30 text-text">
<Navbar lang="en" />
<PageCornerBadges fileNo="003" chapterTitle="SUBJECTS" pageNum="064" totalPages="190" />

<main className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-28 md:pt-32 pb-24">
 
 {/* Article Masthead */}
<header className="mb-16 border-b border-text/15 pb-10">
<div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] uppercase tracking-[0.25em] text-text/50 mb-6">
<span className="text-accent font-semibold">PART III · BIOGRAPHICAL MONOGRAPHS · 1757–1947</span>
<span>24 MIN READ · 12 FORENSIC DOSSIERS</span>
<span>ARCHIVAL PROFILES</span>
</div>

<h1 
 className="font-serif text-text text-[clamp(36px,7.5vw,100px)] leading-[0.93] tracking-[-0.01em] uppercase font-black mb-4"
 style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
 >
 The Actors of Empire &amp; Resistance
</h1>
<p className="font-serif italic text-[clamp(18px,2.2vw,26px)] text-text/75 leading-snug max-w-[45ch]">
 Twelve Monographic Profiles of the Men and Women Who Built, Governed, and Resisted the British Raj.
</p>

<div className="mt-8 pt-6 border-t border-text/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] text-text/40">
<div>
<span className="text-text/25 uppercase text-[13px] block tracking-[0.15em]">DOCUMENTARY EVIDENCE</span>
<span className="text-text/80">Select Parliamentary Committees, Trial Transcripts &amp; Vernacular Proclamations</span>
</div>
<div>
<span className="text-text/25 uppercase text-[13px] block tracking-[0.15em]">CATEGORIES</span>
<span className="text-text/80">Imperial Architects, Military Commanders, Satyagrahis &amp; Martyrs</span>
</div>
</div>
</header>
 
<blockquote className="border-y border-text/20 py-10 my-12 max-w-[80ch] font-serif italic text-text/80 text-[20px] leading-[1.6]">
 "History is written by the victors. The vanquished version is told in rebellion, in exile, and in the testimony of those they imprisoned."
</blockquote>
 
<section className="my-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8 space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
<p>
<span className="float-left text-[64px] leading-[0.8] font-serif font-bold text-accent pr-3 pt-1">T</span>he 190-year history of British India was not solely shaped by abstract geopolitical forces; it was forged by the specific individuals who enacted policy and those who resisted it. The subjects profiled in this archive represent the dichotomy of colonial rule. Some commanded armies, drafted annexation treaties, and designed systemic revenue models. Others burned tax offices, led fierce jungle campaigns, and mounted the gallows in public executions that radicalized generations. 
</p>
<p>
 These dossiers are constructed directly from primary source materials, ranging from parliamentary inquiries and military dispatches to sedition trial transcripts and revolutionary proclamations. By examining these individuals, we trace the arc of the British Raj from its mercantile origins to its violent conclusion.
</p>
</div>
</div>
</section>

<hr className="border-t border-text/10 my-12" />

 {/* 1. ROBERT CLIVE */}
<section className="py-12 border-t border-text/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">ARCHITECT OF COMPANY CONQUEST</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">ROBERT CLIVE (1st Baron Clive of Plassey)</h3>
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. 1725, SHROPSHIRE · KEY PERIOD: 1757–1767</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
<p>
 Robert Clive emerged as the quintessential figure of early British imperialism in India, transforming the East India Company from a precarious trading enterprise into a territorial power. His decisive victory at the Battle of Plassey in 1757 was less a military triumph than a masterstroke of political subversion. By pre-arranging the betrayal of the Nawab of Bengal, Siraj ud-Daulah, through a secret pact with the commander Mir Jafar, Clive fundamentally altered the balance of power in the subcontinent without fighting a conventional battle.
</p>
<p>
 In 1765, Clive secured the Diwani, the right to collect revenues in Bengal, Bihar, and Orissa, from the weakened Mughal Emperor. This administrative coup legalized the Company's control over one of the wealthiest regions in the world, establishing a direct pipeline of capital from Indian peasants to British shareholders. Clive personally amassed a staggering fortune, extracting over £234,000 in private gifts from Indian princes, alongside a massive annual jagir of £27,000, making him one of the wealthiest men in Europe.
</p>
<p>
 His rapacious accumulation of wealth drew intense scrutiny back in Britain, leading to a parliamentary investigation by a Select Committee in 1772. Defending his actions against charges of unprecedented corruption, Clive famously declared to Parliament,<span className="text-accent font-bold">&ldquo;I am astonished at my own moderation.&rdquo;</span>Although he secured parliamentary vindication, he died by his own hand in 1774. His lasting significance lies in establishing the systemic model of extraction and sovereign corporate governance that would define British rule for the next century.
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>SECURED BENGAL DIWANI (1765)</p>
<p>£234,000 IN PRIVATE "GIFTS"</p>
<p>INVESTIGATED BY PARLIAMENT 1772</p>
<p>DIED BY SUICIDE 1774</p>
</aside>
</div>
</section>

 {/* 2. WARREN HASTINGS */}
<section className="py-12 border-t border-text/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">FIRST GOVERNOR-GENERAL OF INDIA</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">WARREN HASTINGS</h3>
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. 1732, WORCESTERSHIRE · KEY PERIOD: 1772–1785</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">

<div className="w-full sm:w-[42%] float-right ml-6 mb-6 mt-1 clear-right">
<img
 src="/TheImperialAudit/illustrations/dossiers/curzon.jpg"
 alt="Imperial Administrative Portrait India Office Records"
 className="w-full h-auto max-h-[260px] object-contain block"
 style={{ filter: 'grayscale(100%) contrast(1.12) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.12em] text-text/40 mt-1.5 leading-tight italic">
 ▲ Imperial Administrative Portrait India Office Records
</p>
</div>
<p>
 As the first Governor-General of India, Warren Hastings was tasked with organizing the chaotic and deeply corrupt administration left in Clive's wake. Hastings faced the monumental challenge of establishing a civil administration in Bengal while preserving the East India Company's profit margins. He initiated sweeping reorganizations of the revenue system, attempting various farming methods to stabilize tax collection, laying the groundwork for the permanent structures that his successors would finalize.
</p>
<p>
 His tenure was profoundly marked by the aftermath of the catastrophic Bengal Famine of 1770, which wiped out an estimated one-third of the region's population. Despite the devastation, Hastings maintained ruthless revenue collection levels to appease Company directors in London, a policy that exacerbated agrarian collapse. Simultaneously, he sponsored the translation of Hindu and Islamic legal texts, demonstrating a complex orientalist fascination with Indian culture while ruthlessly expanding British hegemony.
</p>
<p>
 Upon his return to Britain, Hastings faced an<span className="text-accent font-semibold">epic seven-year impeachment trial</span>led by Edmund Burke, who charged him with high crimes, cruelty, and systemic corruption. Though ultimately acquitted by the House of Lords in 1795, the trial exposed the brutal reality of colonial governance to the British public. Today, historiographical debate continues: some view Hastings as a sympathetic scholar who attempted to rule Indians by their own laws, while others identify him as the principal architect who systematized the violent extraction of the early Raj.
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>REORGANIZED REVENUE SYSTEM</p>
<p>RULED POST-1770 FAMINE</p>
<p>IMPEACHED BY BURKE</p>
<p>ACQUITTED AFTER 7 YEARS</p>
</aside>
</div>
</section>

 {/* 3. LORD CORNWALLIS */}
<section className="py-12 border-t border-text/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">GOVERNOR-GENERAL · ARCHITECT OF PERMANENT SETTLEMENT</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">LORD CORNWALLIS</h3>
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. 1738, SUFFOLK · KEY PERIOD: 1786–1793, 1805</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">

<div className="w-full sm:w-[42%] float-right ml-6 mb-6 mt-1 clear-right">
<img
 src="/TheImperialAudit/illustrations/dossiers/curzon.jpg"
 alt="Lord Cornwallis: Architect of the Permanent Settlement (1793)"
 className="w-full h-auto max-h-[260px] object-contain block"
 style={{ filter: 'grayscale(100%) contrast(1.12) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.12em] text-text/40 mt-1.5 leading-tight italic">
 ▲ Lord Cornwallis: Architect of the Permanent Settlement (1793)
</p>
</div>
<p>
 Arriving in India after his defeat by American revolutionaries at Yorktown, Lord Cornwallis was dispatched to reform an administration plagued by scandal and inefficiency. His most enduring and catastrophic legacy was the<span className="text-accent font-semibold">Permanent Settlement of Bengal in 1793</span>. Driven by a Whig belief in private property as the basis of prosperity, Cornwallis transformed traditional revenue collectors (zamindars) into absolute landlords, fixing the state land tax permanently. 
</p>
<p>
 While intended to create a stable, English-style agrarian society and reliable tax base, the Settlement proved disastrous for rural India. It summarily stripped millions of tenant farmers of their customary land rights, reducing them to tenants-at-will. When initial tax demands were set unsustainably high, many traditional zamindars lost their lands to urban speculators, creating a vicious class of absentee landlords. This structure laid the volatile groundwork for subsequent agrarian crises, most notably the Indigo Revolt of the 1860s.
</p>
<p>
 Equally significant was the Cornwallis Code, a comprehensive body of legislation that formalized the administration of justice and revenue. Crucially, it instituted a rigid racial hierarchy by<span className="text-accent font-semibold">systematically excluding Indians from all higher administrative and judicial positions</span>. Cornwallis harbored deep prejudices regarding the trustworthiness of Indian officials, ensuring that the nascent Indian Civil Service became a purely European preserve, an institutionalized racial bar that would characterize the British Raj until its final decades.
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>PERMANENT SETTLEMENT (1793)</p>
<p>CREATED ZAMINDARI LANDLORDS</p>
<p>CORNWALLIS CODE</p>
<p>EXCLUDED INDIANS FROM GOVT</p>
</aside>
</div>
</section>

 {/* 4. LORD DALHOUSIE */}
<section className="py-12 border-t border-text/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">GOVERNOR-GENERAL · AUTHOR OF THE DOCTRINE OF LAPSE</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">LORD DALHOUSIE</h3>
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. 1812, SCOTLAND · KEY PERIOD: 1848–1856</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">

<div className="w-full sm:w-[42%] float-right ml-6 mb-6 mt-1 clear-right">
<img
 src="/TheImperialAudit/illustrations/dossiers/churchill.jpg"
 alt="Imperial Viceroyalty Portrait: Declassified State Papers"
 className="w-full h-auto max-h-[260px] object-contain block"
 style={{ filter: 'grayscale(100%) contrast(1.12) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.12em] text-text/40 mt-1.5 leading-tight italic">
 ▲ Imperial Viceroyalty Portrait: Declassified State Papers
</p>
</div>
<div className="w-full mb-6 clear-both">
<img
 src="/TheImperialAudit/illustrations/dossiers/curzon.jpg"
 alt="Lord Curzon (Viceroy 1899–1905): a later embodiment of the Doctrine of Lapse era's imperial ideology"
 className="w-full h-auto object-cover object-top block"
 style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/35 mt-1.5 leading-tight italic">
 Lord Curzon (Viceroy 1899–1905): a later embodiment of the Doctrine of Lapse era's imperial ideology
</p>
</div>
<p>
 James Broun-Ramsay, Lord Dalhousie, was an aggressive imperial modernizer whose tenure irrevocably accelerated the collision between the East India Company and the Indian populace. He is most notoriously associated with the Doctrine of Lapse, an expansionist legal fiction dictating that if an Indian ruler died without a natural biological male heir, the state's sovereignty lapsed and it was automatically annexed by the Company. This policy actively dismissed traditional Hindu laws of adoption.
</p>
<p>
 Under this doctrine, Dalhousie ruthlessly swallowed principalities including Satara (1848), Jhansi (1853), and Nagpur (1854). However, his most explosive act was the<span className="text-accent font-semibold">annexation of Awadh in 1856</span>. Deposing Nawab Wajid Ali Shah on dubious claims of "misgovernment" - despite explicit treaty guarantees, Dalhousie shattered the loyalty of the Bengal Army's sepoys, many of whom hailed from Awadh. Historians universally identify this annexation as a primary catalyst for the catastrophic Uprising of 1857.
</p>
<p>
 Paradoxically, Dalhousie was also the architect of India's infrastructural modernization. He introduced the railway system, the electric telegraph, a unified postal service, and the Public Works Department. This presented the core contradiction of his rule: he rapidly modernized the physical landscape of the subcontinent while systematically and arrogantly destroying the political sovereignty of its traditional elites. The very telegraph lines he laid would soon be used to coordinate the suppression of the rebellion his policies provoked.
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>DOCTRINE OF LAPSE</p>
<p>ANNEXED AWADH (1856)</p>
<p>INTRODUCED RAILWAYS & TELEGRAPH</p>
<p>PROVOKED 1857 UPRISING</p>
</aside>
</div>
</section>

 {/* 5. LORD CURZON */}
<section className="py-12 border-t border-text/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">VICEROY OF INDIA</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">LORD CURZON</h3>
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. 1859, DERBYSHIRE · KEY PERIOD: 1899–1905</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">

<div className="w-full sm:w-[42%] float-right ml-6 mb-6 mt-1 clear-right">
<img
 src="/TheImperialAudit/illustrations/dossiers/curzon.jpg"
 alt="Lord Curzon, Viceroy of India (1899–1905), architect of the 1905 Partition of Bengal"
 className="w-full h-auto max-h-[260px] object-contain block"
 style={{ filter: 'grayscale(100%) contrast(1.12) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.12em] text-text/40 mt-1.5 leading-tight italic">
 ▲ Lord Curzon, Viceroy of India (1899–1905), architect of the 1905 Partition of Bengal
</p>
</div>
<p>
 George Nathaniel Curzon served as Viceroy at the zenith of high imperialism, bringing to India a brilliant intellect coupled with an aristocratic arrogance that profoundly alienated the growing Indian nationalist class. He fundamentally viewed Indians as subjects to be administered with efficient paternalism, entirely dismissing their capacities for self-governance. His tenure was marked by a severe austerity towards famine relief during the devastating 1899–1900 drought, even as he lavishly staged the 1903 Imperial Durbar in Delhi.
</p>
<p>
 Curzon's most momentous and disastrous administrative act was the<span className="text-accent font-semibold">1905 Partition of Bengal</span>. Officially justified as an administrative necessity to govern a massive province, the partition divided Bengal starkly along religious lines, creating a Muslim-majority Eastern Bengal and Assam, and a Hindu-majority West Bengal. Nationalist leaders immediately recognized this as a calculated application of "divide and rule." As Curzon himself noted in private correspondence,<span className="text-accent font-bold">&ldquo;Bengal united is a power. Bengal divided will pull in different ways.&rdquo;</span>
</p>
<p>
 The partition sparked unprecedented mass protests, boycotts of British goods (the Swadeshi movement), and the rise of revolutionary terrorism. While the British were eventually forced to reverse the partition in 1911 to quell the escalating unrest, the damage was irrevocable. Curzon's policy had successfully sown the seeds of institutional communalism, deepening Hindu-Muslim political divisions that would plague the nationalist movement and culminate in the bloody partition of the subcontinent in 1947.
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>PARTITION OF BENGAL (1905)</p>
<p>1903 IMPERIAL DURBAR</p>
<p>STRICT FAMINE AUSTERITY</p>
<p>CATALYZED SWADESHI MOVEMENT</p>
</aside>
</div>
</section>

 {/* 6. GENERAL REGINALD DYER */}
<section className="py-12 border-t border-text/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">BRIGADIER-GENERAL · AMRITSAR GARRISON COMMANDER</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">GENERAL REGINALD DYER</h3>
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. 1864, MURREE · KEY PERIOD: APRIL 1919</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">

<div className="w-full sm:w-[42%] float-right ml-6 mb-6 mt-1 clear-right">
<img
 src="/TheImperialAudit/illustrations/dossiers/dyer.jpg"
 alt="Brigadier-General Reginald Dyer, Hunter Commission testimony portrait, 1920"
 className="w-full h-auto max-h-[260px] object-contain block"
 style={{ filter: 'grayscale(100%) contrast(1.12) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.12em] text-text/40 mt-1.5 leading-tight italic">
 ▲ Brigadier-General Reginald Dyer, Hunter Commission testimony portrait, 1920
</p>
</div>
<p>
 Brigadier-General Reginald Dyer became the face of the ultimate moral collapse of British rule in India. On 13 April 1919, during the festival of Baisakhi, Dyer marched a detachment of fifty Gurkha and Baluchi riflemen into the Jallianwala Bagh, an enclosed public square in Amritsar where thousands of unarmed civilians were gathering in defiance of martial law. Without issuing a warning to disperse, Dyer ordered his men to open fire, directing their aim at the thickest parts of the crowd and the narrow exits.
</p>
<p>
 His troops fired<span className="text-accent font-bold">1,650 rounds over ten agonizing minutes</span>, stopping only when ammunition ran out. Hundreds were killed and over a thousand wounded, whom Dyer left bleeding on the ground, forbidding medical aid. Testifying before the subsequent Hunter Commission, Dyer demonstrated absolutely no remorse. He coldly stated that his intention was not simply to disperse the crowd, but to produce a "moral effect" throughout the Punjab. He further admitted he would have used machine guns had his armored cars fit through the entrance.
</p>
<p>
 In the aftermath, Dyer enforced the humiliating "Crawling Order," forcing Indians to crawl on their bellies down a street where a British missionary had been assaulted. Though eventually relieved of his command in July 1920, Dyer was<span className="text-accent font-semibold">never prosecuted and was hailed as a hero by conservative factions</span>, who raised a massive public fund for his retirement. His actions fundamentally alienated moderate Indian nationalists and destroyed any remaining illusion that the British Empire rested on a foundation of justice rather than raw violence.
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>JALLIANWALA BAGH MASSACRE</p>
<p>FIRED 1,650 ROUNDS</p>
<p>ENFORCED CRAWLING ORDER</p>
<p>NEVER PROSECUTED</p>
</aside>
</div>
</section>

 {/* 7. MANGAL PANDEY */}
<section className="py-12 border-t border-text/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">SEPOY · 34TH BENGAL NATIVE INFANTRY</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">MANGAL PANDEY</h3>
 {/* ARCHIVAL PHOTO */}
<div className="my-12 border-t border-text/10 pt-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<div className="overflow-hidden border border-text/15">
<img
 src="/TheImperialAudit/illustrations/dossiers/khudiram.jpg"
 alt="Khudiram Bose, Bengal's youngest executed revolutionary, 1908"
 className="w-full h-auto object-cover"
 style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
 />
</div>
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-text/40 mt-3">
 ▲ Khudiram Bose, Bengal's youngest executed revolutionary, 1908
</p>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-3 pt-2">
<p>National Archives of India</p>
<p>Historical archive</p>
</aside>
</div>
</div>

<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. c.1827, UNITED PROVINCES · KEY PERIOD: 29 MARCH 1857</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
<div className="w-full mb-6 clear-both">
<img
 src="/TheImperialAudit/illustrations/dossiers/khudiram.jpg"
 alt="Khudiram Bose, like Mangal Pandey, became a symbol of Bengali revolutionary martyrdom"
 className="w-full h-auto object-cover object-top block"
 style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/35 mt-1.5 leading-tight italic">
 Khudiram Bose, like Mangal Pandey, became a symbol of Bengali revolutionary martyrdom
</p>
</div>
<p>
 Mangal Pandey occupies a deeply symbolic position as the vanguard of the great 1857 Uprising. A sepoy serving in the 34th Bengal Native Infantry, Pandey's name has become inexorably linked with the explosive unrest that fractured the British Indian Army. On the afternoon of 29 March 1857, at the Barrackpore parade ground near Calcutta, an agitated Pandey paced in front of the regiment's quarter guard, armed with a loaded musket, actively exhorting his fellow soldiers to rise up and defend their religion against European officers.
</p>
<p>
 When British officers attempted to subdue him, violence ensued. Pandey wounded Adjutant Baugh with a sword after a brief firearm exchange. Crucially, the quarter guard and other sepoys present largely refused orders to arrest Pandey, demonstrating the profound breakdown of military discipline and the widespread anti-colonial sentiment simmering in the ranks over the introduction of the new Enfield rifle cartridges. Pandey eventually turned his musket on himself, though he survived his suicide attempt.
</p>
<p>
 British authorities reacted with swift and terrifying retribution. Brought to court-martial, Pandey was sentenced to death and hanged on<span className="text-accent font-semibold">8 April 1857</span>the execution deliberately moved forward by over a week out of British paranoia that a mutiny might rescue him. The 34th Native Infantry was aggressively disbanded in disgrace. While historians continue to debate whether Pandey's actions were a calculated political strike or an impulsive outburst exacerbated by bhang, his legacy was cemented immediately; the British adopted the pejorative "Pandies" to describe all subsequent mutineers, elevating him to the first named martyr of the rebellion.
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>ATTACKED OFFICERS (MARCH 1857)</p>
<p>HANGED 8 APRIL 1857</p>
<p>34TH REGIMENT DISBANDED</p>
<p>FIRST MARTYR OF REBELLION</p>
</aside>
</div>
</section>

 {/* 8. RANI LAKSHMIBAI OF JHANSI */}
<section className="py-12 border-t border-text/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">RULER OF JHANSI · MILITARY COMMANDER</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">RANI LAKSHMIBAI</h3>
 {/* ARCHIVAL PHOTO */}
<div className="my-12 border-t border-text/10 pt-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<div className="overflow-hidden border border-text/15">
<img
 src="/TheImperialAudit/illustrations/dossiers/lakshmibai.jpg"
 alt="Rani Lakshmibai of Jhansi, contemporary portrait"
 className="w-full h-auto object-cover"
 style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
 />
</div>
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-text/40 mt-3">
 ▲ Rani Lakshmibai of Jhansi, contemporary portrait
</p>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-3 pt-2">
<p>National Archives of India</p>
<p>Historical archive</p>
</aside>
</div>
</div>

<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. c.1828, VARANASI · KEY PERIOD: 1857–1858</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
<div className="w-full mb-6 clear-both">
<img
 src="/TheImperialAudit/illustrations/dossiers/lakshmibai.jpg"
 alt="Rani Lakshmibai of Jhansi, contemporary portrait, c.1850s"
 className="w-full h-auto object-cover object-top block"
 style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/35 mt-1.5 leading-tight italic">
 Rani Lakshmibai of Jhansi, contemporary portrait, c.1850s
</p>
</div>
<p>
 Rani Lakshmibai stands as the most iconic and enduring figure of Indian resistance to British rule. Born Manikarnika Tambe, she became the Queen of Jhansi, a Maratha principality. When her husband died in 1853, Dalhousie applied the ruthless<span className="text-accent font-semibold">Doctrine of Lapse</span>to annex Jhansi, rejecting the claim of her adopted son. Despite her articulate legal petitions to London protesting this aggressive expropriation, the Company seized the state, granting her a mere pension.
</p>
<p>
 Interestingly, when the 1857 Uprising initially broke out, Lakshmibai was not an immediate rebel. She took control of Jhansi to maintain order on behalf of the British, defending the territory against rival Indian factions. However, recognizing that the British suspected her of complicity in a massacre of European civilians in her city, and realizing that the colonial state intended to try her, she unequivocally joined the rebellion when General Hugh Rose's forces advanced on Jhansi in early 1858.
</p>
<p>
 Her subsequent military campaign became legendary. She defended the fortress of Jhansi against a brutal British siege for two weeks before executing a daring nighttime escape on horseback through enemy lines. Joining forces with other rebel leaders like Tatya Tope, she continued to fight a highly mobile guerrilla war. Dressed in cavalry uniform, she was<span className="text-accent font-semibold">killed in combat at Kotah-ki-Serai on 17 June 1858</span>. Even her enemy, General Rose, famously conceded that she was "the best and bravest military leader of the rebels."
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>DEPOSED BY DOCTRINE OF LAPSE</p>
<p>DEFENDED JHANSI (1858)</p>
<p>KILLED IN BATTLE NEAR GWALIOR</p>
<p>ICON OF 1857 RESISTANCE</p>
</aside>
</div>
</section>

 {/* 9. BEGUM HAZRAT MAHAL */}
<section className="py-12 border-t border-text/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">REGENT OF AWADH · COMMANDER OF LUCKNOW UPRISING</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">BEGUM HAZRAT MAHAL</h3>
 {/* ARCHIVAL PHOTO */}
<div className="my-12 border-t border-text/10 pt-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<div className="overflow-hidden border border-text/15">
<img
 src="/TheImperialAudit/illustrations/dossiers/hazratmahal.jpg"
 alt="Begum Hazrat Mahal: Regent of Awadh"
 className="w-full h-auto object-cover"
 style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
 />
</div>
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-text/40 mt-3">
 ▲ Begum Hazrat Mahal: Regent of Awadh
</p>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-3 pt-2">
<p>National Archives of India</p>
<p>Historical archive</p>
</aside>
</div>
</div>

<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. c.1820, FAIZABAD · KEY PERIOD: 1857–1858</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
<div className="w-full mb-6 clear-both">
<img
 src="/TheImperialAudit/illustrations/dossiers/hazratmahal.jpg"
 alt="Begum Hazrat Mahal: Regent of Awadh, refused British amnesty, died in Kathmandu 1879"
 className="w-full h-auto object-cover object-top block"
 style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/35 mt-1.5 leading-tight italic">
 Begum Hazrat Mahal: Regent of Awadh, refused British amnesty, died in Kathmandu 1879
</p>
</div>
<p>
 While Begum Hazrat Mahal is sometimes overshadowed in popular history by Rani Lakshmibai, she was arguably the most successful political and military organizer of the 1857 Uprising. A wife of the deposed Nawab Wajid Ali Shah of Awadh, she possessed acute political acumen. When her husband was exiled to Calcutta by the British following their arbitrary 1856 annexation, she remained in Lucknow. As the rebellion ignited, she emerged from the royal household to become the supreme leader of the resistance in the volatile Awadh region.
</p>
<p>
 Crowning her minor son, Birjis Qadr, as the legitimate ruler of Awadh, she acted as regent and forged a remarkable coalition of disparate forces. She successfully united aggrieved sepoys, dispossessed local landlords (taluqdars), and ordinary peasants against the Company. Under her leadership, rebel forces laid siege to the British Residency in Lucknow, trapping European civilians and soldiers for months. She actively issued proclamations exposing British hypocrisy, famously challenging their claims of bringing "justice" when they had so clearly violated sovereign treaties.
</p>
<p>
 Her administration of Lucknow held out against multiple massive British counter-offensives until the final recapture of the city in March 1858. Demonstrating unyielding resolve, Begum Hazrat Mahal categorically refused all offers of British amnesty and pensions. Alongside a small band of loyal followers, she retreated into the dense jungles of the Terai and eventually sought asylum in Nepal. She died in Kathmandu in 1879, never surrendering to the British and never returning to India, leaving a legacy of uncompromising resistance by a woman with no formal initial authority.
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>ORGANIZED AWADH RESISTANCE</p>
<p>BESIEGED LUCKNOW RESIDENCY</p>
<p>REFUSED BRITISH AMNESTY</p>
<p>DIED IN EXILE (NEPAL, 1879)</p>
</aside>
</div>
</section>

 {/* 10. DADABHAI NAOROJI */}
<section className="py-12 border-t border-text/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">POLITICAL ECONOMIST · MP FOR FINSBURY · INC PRESIDENT</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">DADABHAI NAOROJI</h3>
 {/* ARCHIVAL PHOTO */}
<div className="my-12 border-t border-text/10 pt-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<div className="overflow-hidden border border-text/15">
<img
 src="/TheImperialAudit/illustrations/dossiers/rajendra.jpg"
 alt="Dadabhai Naoroji: first Indian elected to the British Parliament, 1892"
 className="w-full h-auto object-cover"
 style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
 />
</div>
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-text/40 mt-3">
 ▲ Dadabhai Naoroji: first Indian elected to the British Parliament, 1892
</p>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-3 pt-2">
<p>India Office Records, British Library</p>
<p>Historical archive</p>
</aside>
</div>
</div>

<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. 1825, BOMBAY · KEY PERIOD: 1867–1906</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
<div className="w-full mb-6 clear-both">
<img
 src="/TheImperialAudit/illustrations/dossiers/rajendra.jpg"
 alt="Dr. Rajendra Prasad: championed the same economic nationalism Naoroji founded"
 className="w-full h-auto object-cover object-top block"
 style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/35 mt-1.5 leading-tight italic">
 Dr. Rajendra Prasad: championed the same economic nationalism Naoroji founded
</p>
</div>
<p>
 Affectionately known as the "Grand Old Man of India," Dadabhai Naoroji shifted the battleground against the British Empire from the military domain to the realm of political economy. A brilliant scholar and moderate nationalist, Naoroji achieved the historic milestone of becoming the first Indian elected to the British Parliament, winning the seat of Finsbury Central in London by a margin of merely five votes in 1892. From this platform, he tirelessly lobbied for Indian representation and civil rights within the imperial framework.
</p>
<p>
 His paramount historical contribution was the articulation of the "Drain Theory." In his seminal 1901 work,<i>Poverty and Un-British Rule in India</i>, Naoroji provided the first systematic, quantitative analysis proving that the British administration was systematically bleeding India of its wealth. He demonstrated that India's massive export surplus was not returning as imports or investment; instead, it was being drained away to London as "Home Charges," pensions for British officials, and profit remittances. Naoroji estimated this extraction at approximately £30 million annually.
</p>
<p>
 Naoroji's economic critique destroyed the paternalistic British narrative that colonial rule was bringing prosperity to the subcontinent. Modern economic historians have validated his core thesis; contemporary estimates, such as those by Utsa Patnaik (2018), suggest the total wealth extracted between 1765 and 1938 amounted to an astronomical $45 trillion in modern terms. Serving three times as the President of the Indian National Congress, Naoroji's intellectual framework profoundly influenced the next generation of nationalists, including both Tilak and Gandhi, laying the ideological foundation for the demand for Swaraj (self-rule).
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>FIRST INDIAN MP IN UK (1892)</p>
<p>FORMULATED THE DRAIN THEORY</p>
<p>WROTE "POVERTY AND UN-BRITISH RULE"</p>
<p>3-TIME INC PRESIDENT</p>
</aside>
</div>
</section>

 {/* 11. BAL GANGADHAR TILAK */}
<section className="py-12 border-t border-text/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">NATIONALIST LEADER · JOURNALIST · POLITICAL THEORIST</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">BAL GANGADHAR TILAK</h3>
 {/* ARCHIVAL PHOTO */}
<div className="my-12 border-t border-text/10 pt-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<div className="overflow-hidden border border-text/15">
<img
 src="/TheImperialAudit/illustrations/dossiers/tilak.jpg"
 alt="Bal Gangadhar Tilak: editor of Kesari, twice imprisoned for sedition"
 className="w-full h-auto object-cover"
 style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
 />
</div>
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-text/40 mt-3">
 ▲ Bal Gangadhar Tilak: editor of Kesari, twice imprisoned for sedition
</p>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-3 pt-2">
<p>Maharashtra State Archives</p>
<p>Historical archive</p>
</aside>
</div>
</div>

<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. 1856, RATNAGIRI · KEY PERIOD: 1890–1920</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
<div className="w-full mb-6 clear-both">
<img
 src="/TheImperialAudit/illustrations/dossiers/tilak.jpg"
 alt="Bal Gangadhar Tilak: editor of Kesari, twice imprisoned for sedition, died 1920"
 className="w-full h-auto object-cover object-top block"
 style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/35 mt-1.5 leading-tight italic">
 Bal Gangadhar Tilak: editor of Kesari, twice imprisoned for sedition, died 1920
</p>
</div>
<p>
 Bal Gangadhar Tilak transformed the Indian nationalist movement from an elite debating society into a forceful, mass-based political struggle. Rejecting the moderate Congress faction's strategy of polite petitioning and constitutional reform, Tilak advocated for aggressive agitation and non-cooperation. His legendary declaration, "Swaraj is my birthright and I shall have it", became the defining battle cry for a radicalized generation of Indians who were no longer willing to accept the legitimacy of the British Raj.
</p>
<p>
 A brilliant propagandist and cultural organizer, Tilak utilized his Marathi newspaper<i>Kesari</i>to launch blistering critiques of colonial policies. Recognizing the need to mobilize the masses outside the English-speaking intelligentsia, he pioneered the use of public religious festivals for political organization. By transforming the private worship of Ganesh (Ganesh Chaturthi) into a massive public community festival, he successfully created an organizational network that the British struggled to suppress under the guise of religious interference.
</p>
<p>
 The colonial state deeply feared his influence, prosecuting him for sedition in 1897 and again in 1908. He served a grueling six-year sentence in the notorious Mandalay prison in Burma. Despite his reputation as a Hindu traditionalist, Tilak demonstrated immense political pragmatism; in 1916, he was instrumental in forging the historic Lucknow Pact with Muhammad Ali Jinnah, securing a crucial, albeit temporary, alliance between the Congress and the Muslim League. Tilak died in 1920, just as Mahatma Gandhi was rising to inherit the mobilized nation he had helped awaken.
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>"SWARAJ IS MY BIRTHRIGHT"</p>
<p>EDITOR OF KESARI</p>
<p>JAILED FOR SEDITION (1908-1914)</p>
<p>ARCHITECT OF LUCKNOW PACT</p>
</aside>
</div>
</section>

 {/* 12. MOHANDAS KARAMCHAND GANDHI */}
<section className="py-12 border-t border-text/10 mb-24">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent mb-2">POLITICAL LEADER · INDEPENDENCE MOVEMENT</p>
<h3 className="font-serif text-[28px] md:text-[36px] font-bold leading-tight mb-2">MOHANDAS KARAMCHAND GANDHI</h3>
 {/* ARCHIVAL PHOTO */}
<div className="my-12 border-t border-text/10 pt-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8">
<div className="overflow-hidden border border-text/15">
<img
 src="/TheImperialAudit/illustrations/dossiers/gandhi.jpg"
 alt="Mahatma Gandhi, photographed during the Salt March, 1930"
 className="w-full h-auto object-cover"
 style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.92)' }}
 />
</div>
<p className="font-mono text-[13px] uppercase tracking-[0.2em] text-text/40 mt-3">
 ▲ Mahatma Gandhi, photographed during the Salt March, 1930
</p>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-3 pt-2">
<p>India Office Records, British Library</p>
<p>Historical archive</p>
</aside>
</div>
</div>

<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/40 mb-8">B. 1869, PORBANDAR · KEY PERIOD: 1915–1948</p>
<div className="space-y-6 font-serif text-[17px] leading-[1.75] text-text/85">
<div className="w-full mb-6 clear-both">
<img
 src="/TheImperialAudit/illustrations/dossiers/gandhi.jpg"
 alt="Mahatma Gandhi, photographed during the historic Dandi Salt March, March 1930"
 className="w-full h-auto object-cover object-top block"
 style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.93)' }}
 />
<p className="font-mono text-[13px] uppercase tracking-[0.15em] text-text/35 mt-1.5 leading-tight italic">
 Mahatma Gandhi, photographed during the historic Dandi Salt March, March 1930
</p>
</div>
<p>
 Mohandas Gandhi was arguably the most consequential figure of the 20th-century anti-colonial struggle. Returning to India from South Africa in 1915, he initially maintained a cooperative stance toward the British Empire, even supporting the war effort during World War I. However, the sheer brutality of the Jallianwala Bagh massacre in 1919 radically transformed his politics. Concluding that the British system was fundamentally "satanic," he launched the Non-Cooperation Movement, shifting the Congress from an elite institution into a mass organization utilizing non-violent civil disobedience (Satyagraha).
</p>
<p>
 Gandhi's political genius lay in his ability to identify profoundly resonant symbols to mobilize the Indian peasantry. The most spectacular example was the 1930 Dandi Salt March. By walking 241 miles with 78 followers to illegally make salt from seawater, Gandhi took a highly regressive British tax that affected every Indian and turned it into a devastating moral and political challenge to imperial authority. Through successive campaigns, from Civil Disobedience to the militant "Quit India" movement of 1942, he systematically stripped the British Raj of its legitimacy and its ability to govern.
</p>
<p>
 His legacy, however, is immensely complex and deeply contested. While he achieved his ultimate goal of independence, he considered his life a failure because he could not prevent the bloody Partition of the subcontinent. Furthermore, critics, particularly those aligned with B.R. Ambedkar, argue that Gandhi's approach to caste reform was patronizing and ultimately marginalized Dalit political empowerment. On 30 January 1948, Gandhi was assassinated by Nathuram Godse, a right-wing Hindu nationalist who blamed him for the concession of Pakistan. Despite the controversies, his strategy of mass mobilization remains the essential mechanism that finally broke the back of the British Empire.
</p>
</div>
</div>
<aside className="md:col-start-10 md:col-span-3 font-mono text-[13px] text-text/40 uppercase tracking-[0.1em] leading-[1.9] space-y-4 pt-8">
<p>NON-COOPERATION & QUIT INDIA</p>
<p>1930 DANDI SALT MARCH</p>
<p>ASSASSINATED JAN 1948</p>
<p>INTENSELY DEBATED LEGACY</p>
</aside>
</div>
</section>

 {/* Footer Navigation */}
<hr className="border-t border-text/10 my-12" />
 
<div className="flex justify-between items-center font-mono text-[13px] uppercase tracking-[0.1em] text-text/60">
<Link href="/en/chapters/comparison" className="hover:text-accent transition-colors">
 ← PREVIOUS: COMPARISON
</Link>
<Link href="/en/chapters/share" className="hover:text-accent transition-colors">
 NEXT: SHARE →
</Link>
</div>

</main>
</div>
 );
}
