"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const blogPosts = [
  {
    title: "How to Start an EV Charging Station Business in Pakistan",
    slug: "start-ev-business-pakistan",
    date: "April 28, 2026",
    category: "Business Guide",
    readTime: "7 min read",
    excerpt: "A step-by-step breakdown of everything you need to launch a profitable EV charging station — from site selection to NEPRA compliance.",
    accent: "#00AEEF",
    image: "/ev_charging_business.png",
  },
  {
    title: "EV Charging Station License Requirements in Pakistan",
    slug: "ev-license-requirements",
    date: "April 25, 2026",
    category: "Regulatory",
    readTime: "5 min read",
    excerpt: "Understand the full regulatory framework, NEPRA licensing process, and documentation required to legally operate an EV charging station.",
    accent: "#39D353",
    image: "/clean_energy_city.png",
  },
  {
    title: "Cost of Setting Up an EV Charging Station in Pakistan",
    slug: "cost-setup-ev-charging",
    date: "April 20, 2026",
    category: "Financial",
    readTime: "6 min read",
    excerpt: "A detailed cost analysis covering equipment, civil works, grid connection fees, and ongoing operational expenses for different station types.",
    accent: "#8B5CF6",
    image: "/blog_financial.png",
  },
  {
    title: "AC vs DC EV Chargers: Which One Is Right for Pakistan?",
    slug: "ac-vs-dc-chargers",
    date: "April 15, 2026",
    category: "Technical",
    readTime: "8 min read",
    excerpt: "Compare AC and DC fast-charging technologies side by side — cost, speed, grid compatibility, and use cases specific to the Pakistani market.",
    accent: "#EF4444",
    image: "/blog_ac_vs_dc.png",
  },
  {
    title: "Best Locations for EV Charging Stations in Pakistan",
    slug: "best-locations-ev-charging",
    date: "April 10, 2026",
    category: "Business Strategy",
    readTime: "5 min read",
    excerpt: "Data-driven guidance on high-traffic corridors, commercial zones, and residential hotspots ideal for maximising EV charging station ROI.",
    accent: "#F59E0B",
    image: "/blog_locations.png",
  },
  {
    title: "EV Charging Business Model for Petrol Pump Owners",
    slug: "ev-business-model-petrol-pumps",
    date: "April 5, 2026",
    category: "Industry Solutions",
    readTime: "6 min read",
    excerpt: "How existing petrol pump operators can diversify revenue and future-proof their forecourts by integrating EV charging infrastructure.",
    accent: "#10B981",
    image: "/blog_petrol_pump.png",
  },
  {
    title: "EV Charging Stations for Housing Societies",
    slug: "ev-charging-housing-societies",
    date: "March 30, 2026",
    category: "Residential",
    readTime: "4 min read",
    excerpt: "A practical guide for housing society management committees on deploying shared EV charging infrastructure safely and cost-effectively.",
    accent: "#3B82F6",
    image: "/ev_charging_hero.png",
  },
  {
    title: "EV Infrastructure: The Investor's Opportunity in Pakistan",
    slug: "ev-opportunity-investors",
    date: "March 25, 2026",
    category: "Investment",
    readTime: "7 min read",
    excerpt: "Why EV charging infrastructure is one of the most compelling early-mover investment opportunities emerging in Pakistan's energy sector.",
    accent: "#D946EF",
    image: "/clean_energy_city.png",
  },
  {
    title: "Technical Requirements for EV Charging Stations",
    slug: "technical-requirements-ev",
    date: "March 20, 2026",
    category: "Technical",
    readTime: "9 min read",
    excerpt: "A comprehensive technical reference covering load calculations, earthing systems, switchgear, and safety standards for EV installations.",
    accent: "#EF4444",
    image: "/blog_ac_vs_dc.png",
  },
  {
    title: "EV Charging Station Feasibility Study: What It Includes",
    slug: "ev-feasibility-study",
    date: "March 15, 2026",
    category: "Feasibility",
    readTime: "6 min read",
    excerpt: "Learn what a professional feasibility report covers — demand analysis, financial modelling, risk assessment, and go/no-go recommendations.",
    accent: "#0EA5E9",
    image: "/blog_financial.png",
  },
];

const allCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        padding: '9rem 0 6rem',
        background: 'linear-gradient(rgba(4, 13, 26, 0.85), rgba(11, 31, 51, 0.95)), url(/ev_charging_business.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}>
        {/* decorative blobs */}
        <div style={{ position:'absolute', top:'-80px', left:'-80px', width:'420px', height:'420px', background:'radial-gradient(circle, rgba(0,174,239,0.12) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-60px', right:'-60px', width:'360px', height:'360px', background:'radial-gradient(circle, rgba(57,211,83,0.1) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />

        <div className="container" style={{ position:'relative', zIndex:2, textAlign:'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span style={{
              display:'inline-flex', alignItems:'center', gap:'0.4rem',
              padding:'0.4rem 1.1rem',
              background:'rgba(57,211,83,0.12)',
              border:'1px solid rgba(57,211,83,0.3)',
              color:'#39D353',
              borderRadius:'2rem',
              fontSize:'0.78rem',
              fontWeight:'700',
              letterSpacing:'2px',
              textTransform:'uppercase',
              marginBottom:'1.5rem',
            }}>
              <Tag size={12} /> Knowledge Hub
            </span>

            <h1 style={{
              color:'#fff',
              fontSize:'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight:'800',
              letterSpacing:'-0.5px',
              lineHeight:1.15,
              marginBottom:'1.25rem',
            }}>
              EV Insights &amp; Industry Intelligence
            </h1>

            <p style={{
              color:'rgba(255,255,255,0.65)',
              fontSize:'1.15rem',
              maxWidth:'620px',
              margin:'0 auto',
              lineHeight:1.7,
            }}>
              Expert analysis, regulatory updates, and practical guides for Pakistan's fast-growing electric vehicle charging sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <div style={{
        background:'#fff',
        borderBottom:'1px solid #EEF1F5',
        position:'sticky',
        top:'72px',
        zIndex:50,
      }}>
        <div className="container">
          <div style={{
            display:'flex',
            gap:'0.5rem',
            padding:'1rem 0',
            overflowX:'auto',
            scrollbarWidth:'none',
          }}>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  flexShrink:0,
                  padding:'0.45rem 1.1rem',
                  borderRadius:'2rem',
                  border:`1.5px solid ${activeCategory === cat ? 'var(--color-accent)' : '#E2E8F0'}`,
                  background: activeCategory === cat ? 'var(--color-accent)' : 'transparent',
                  color: activeCategory === cat ? '#fff' : 'var(--color-text-light)',
                  fontSize:'0.82rem',
                  fontWeight:'600',
                  cursor:'pointer',
                  transition:'all 0.22s ease',
                  letterSpacing:'0.3px',
                  whiteSpace:'nowrap',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Post Grid ── */}
      <section style={{ padding:'4rem 0 6rem', background:'#F8FAFC' }}>
        <div className="container">

          {/* post count */}
          <motion.p
            key={activeCategory}
            initial={{ opacity:0 }} animate={{ opacity:1 }}
            style={{ fontSize:'0.88rem', color:'var(--color-text-light)', marginBottom:'2rem' }}
          >
            Showing <strong style={{ color:'var(--color-primary)' }}>{filtered.length}</strong>{' '}
            article{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </motion.p>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fill, minmax(330px, 1fr))',
            gap:'1.75rem',
          }}>
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{
        background:'linear-gradient(135deg, #0B1F33 0%, #0d2e50 100%)',
        padding:'4rem 0',
        textAlign:'center',
      }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp}>
            <h2 style={{ color:'#fff', marginBottom:'0.75rem' }}>Have a Project in Mind?</h2>
            <p style={{ color:'rgba(255,255,255,0.65)', maxWidth:'520px', margin:'0 auto 2rem' }}>
              Our consultants are ready to guide you through feasibility, licensing, and implementation.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding:'0.85rem 2.2rem', fontSize:'1rem' }}>
              Book a Free Consultation <ArrowRight size={16} style={{ marginLeft:'0.5rem' }} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function BlogCard({ post, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once:true, margin:'-40px' }}
      custom={index % 3}
      variants={fadeUp}
      style={{
        background:'#fff',
        borderRadius:'14px',
        border:'1px solid #EEF1F5',
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
        boxShadow:'0 2px 8px rgba(0,0,0,0.04)',
        transition:'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      whileHover={{
        y: -6,
        boxShadow: '0 16px 40px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = post.accent; const img = e.currentTarget.querySelector('.card-img'); if(img) img.style.transform = 'scale(1.07)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#EEF1F5'; const img = e.currentTarget.querySelector('.card-img'); if(img) img.style.transform = 'scale(1)'; }}
    >
      {/* Image — clean, no overlay, no blur */}
      <div style={{ height: '190px', overflow: 'hidden' }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.5s ease',
        }} className="card-img" />
      </div>

      <div style={{ padding:'1.75rem', display:'flex', flexDirection:'column', flexGrow:1, gap:'0' }}>

        {/* Category badge */}
        <span style={{
          display:'inline-block',
          padding:'0.3rem 0.85rem',
          background:`${post.accent}18`,
          color: post.accent,
          borderRadius:'2rem',
          fontSize:'0.72rem',
          fontWeight:'700',
          letterSpacing:'1px',
          textTransform:'uppercase',
          marginBottom:'1rem',
          alignSelf:'flex-start',
        }}>
          {post.category}
        </span>

        {/* Title */}
        <h3 style={{
          fontSize:'1.1rem',
          fontWeight:'700',
          lineHeight:1.45,
          color:'var(--color-primary)',
          marginBottom:'0.75rem',
          flexGrow:1,
        }}>
          <Link
            href={`/blog/${post.slug}`}
            style={{ color:'inherit', transition:'color 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = post.accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; }}
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p style={{
          fontSize:'0.9rem',
          color:'var(--color-text-light)',
          lineHeight:1.65,
          marginBottom:'1.5rem',
        }}>
          {post.excerpt}
        </p>

        {/* Footer meta */}
        <div style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          paddingTop:'1rem',
          borderTop:'1px solid #EEF1F5',
          marginTop:'auto',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
            <span style={{ display:'flex', alignItems:'center', gap:'0.35rem', fontSize:'0.8rem', color:'#94a3b8' }}>
              <Calendar size={13} /> {post.date}
            </span>
            <span style={{ display:'flex', alignItems:'center', gap:'0.35rem', fontSize:'0.8rem', color:'#94a3b8' }}>
              <Clock size={13} /> {post.readTime}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            style={{
              display:'inline-flex',
              alignItems:'center',
              gap:'0.3rem',
              fontSize:'0.82rem',
              fontWeight:'700',
              color: post.accent,
              letterSpacing:'0.3px',
              transition:'gap 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.gap = '0.6rem'; }}
            onMouseLeave={(e) => { e.currentTarget.style.gap = '0.3rem'; }}
          >
            Read Article <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
