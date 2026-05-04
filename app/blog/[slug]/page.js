"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Twitter, Linkedin, Facebook } from 'lucide-react';
import { notFound } from 'next/navigation';

const blogPostsData = [
  { 
    title: "How to Start an EV Charging Station Business in Pakistan", 
    slug: "start-ev-business-pakistan", 
    date: "April 28, 2026", 
    category: "Business Guide", 
    color: "linear-gradient(135deg, rgba(0, 174, 239, 0.9), rgba(11, 31, 51, 0.95))", 
    image: "/ev_charging_business.png",
    content: `
      <h2>The Rise of Electric Vehicles in Pakistan</h2>
      <p>Pakistan is at the cusp of a major transportation revolution. With rising fuel prices and environmental concerns, the shift towards Electric Vehicles (EVs) is accelerating. Starting an EV charging station business today positions you at the forefront of this emerging market.</p>
      
      <h2>1. Market Research &amp; Location Selection</h2>
      <p>The success of a charging station heavily depends on its location. The best spots are where people spend 30 minutes or more, such as shopping malls, restaurants, highway rest areas, and office complexes. Ensure the location has high visibility and easy access.</p>
      
      <h2>2. Understanding Equipment (AC vs DC)</h2>
      <p>You need to decide between AC (Level 2) and DC (Fast) chargers. AC chargers are cheaper but take hours to charge a car, making them ideal for hotels or workplaces. DC fast chargers are expensive but can charge a vehicle in 30-40 minutes, perfect for highways and petrol pumps.</p>
      
      <h2>3. Legal and Regulatory Approvals</h2>
      <p>Before installing anything, you must obtain No Objection Certificates (NOCs) from the relevant authorities, including NEPRA, local development authorities, and your respective electricity distribution company (DISCO).</p>
      
      <h2>4. Grid Connection and Load Assessment</h2>
      <p>EV chargers require significant electrical load. Work with a consultant to assess if your current commercial connection can handle the load or if you need to apply for a separate commercial EV tariff meter.</p>
    `
  },
  { 
    title: "EV Charging Station License Requirements in Pakistan", 
    slug: "ev-license-requirements", 
    date: "April 25, 2026", 
    category: "Regulatory", 
    color: "linear-gradient(135deg, rgba(57, 211, 83, 0.9), rgba(11, 31, 51, 0.95))", 
    image: "/clean_energy_city.png",
    content: `
      <h2>Regulatory Landscape</h2>
      <p>Setting up an EV charging station requires adherence to specific guidelines set by the National Electric Power Regulatory Authority (NEPRA). The process ensures safety, standard pricing, and grid stability.</p>
      
      <h2>Key Documentation Required</h2>
      <ul>
        <li><strong>Business Registration:</strong> Valid SECP registration or sole proprietorship documents.</li>
        <li><strong>Land Ownership/Lease:</strong> Proof that you have the right to use the proposed site for commercial charging.</li>
        <li><strong>Technical Feasibility:</strong> A detailed report showing load requirements, charger specifications, and safety measures.</li>
      </ul>
      
      <h2>Safety Standards</h2>
      <p>The license mandates strict adherence to electrical safety standards. This includes proper earthing, emergency stop buttons, fire fighting equipment, and weather-proof enclosures for outdoor chargers.</p>
    `
  },
];

export default function BlogPost({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = blogPostsData.find(p => p.slug === params.slug);
    
    if (foundPost) {
      setPost(foundPost);
    } else {
      const genericTitle = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setPost({
        title: genericTitle,
        slug: params.slug,
        date: "March 2026",
        category: "General",
        color: "linear-gradient(135deg, rgba(11, 31, 51, 0.9), rgba(0, 0, 0, 0.95))",
        image: "/clean_energy_city.png",
        content: `
          <h2>Exploring ${genericTitle}</h2>
          <p>The electric vehicle landscape in Pakistan is rapidly evolving. Infrastructure development, regulatory frameworks, and consumer adoption are all progressing at an unprecedented pace.</p>
          <p>Investors and businesses must stay informed about the latest trends to capitalize on this green energy revolution. Proper feasibility studies, equipment selection, and location strategies are paramount to success.</p>
          <blockquote>"The future of transportation in Pakistan is electric, and the infrastructure built today will power the economy of tomorrow."</blockquote>
          <p>Contact EVConsults today to learn more about how you can integrate EV charging into your business model safely and profitably.</p>
        `
      });
    }
    setLoading(false);
  }, [params.slug]);

  if (loading) return <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '80px' }}>Loading...</div>;
  if (!post) return notFound();

  return (
    <article style={{ paddingBottom: '4rem' }}>
      {/* Blog Header */}
      <section style={{ 
        position: 'relative', 
        padding: 'clamp(5rem,14vw,8rem) 0 clamp(3rem,6vw,6rem)',
        minHeight: '45vh',
        display: 'flex',
        alignItems: 'center',
        background: `${post.color}, url(${post.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <ArrowLeft size={16} /> Back to all articles
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '860px' }}>
            <div style={{ display: 'inline-block', backgroundColor: 'var(--color-secondary)', color: 'var(--color-primary)', padding: '0.25rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '1px' }}>
              {post.category}
            </div>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.6rem,4vw,3rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>{post.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'rgba(255,255,255,0.8)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={16} /> {post.date}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Tag size={16} /> EV Industry
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section style={{ marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="blog-layout">
            
            {/* Social Share Sidebar — desktop only */}
            <div className="blog-share-sidebar">
              <div style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', fontWeight: '600', textTransform: 'uppercase' }}>Share</span>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', cursor: 'pointer', color: '#1da1f2' }}><Twitter size={16} /></button>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', cursor: 'pointer', color: '#0a66c2' }}><Linkedin size={16} /></button>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', cursor: 'pointer', color: '#1877f2' }}><Facebook size={16} /></button>
              </div>
            </div>

            {/* Main Article */}
            <div>
              <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', padding: 'clamp(1.5rem,5vw,3rem)', boxShadow: 'var(--shadow-lg)' }}>
                <div 
                  className="blog-content"
                  style={{ lineHeight: 1.8, fontSize: 'clamp(0.95rem,2vw,1.1rem)', color: '#334155' }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                <hr style={{ margin: '3rem 0 2rem', borderColor: '#E2E8F0' }} />
                
                <div style={{ backgroundColor: 'rgba(0, 174, 239, 0.05)', padding: 'clamp(1.25rem,4vw,2rem)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Need Professional Guidance?</h3>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>Our experts are ready to assist you with EV charging station feasibility, licensing, and implementation.</p>
                  <Link href="/contact" className="btn btn-primary">Book a Free Consultation</Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <style>{`
        .blog-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .blog-share-sidebar {
          display: none;
        }
        @media (min-width: 992px) {
          .blog-layout {
            grid-template-columns: 60px 1fr;
            gap: 3rem;
          }
          .blog-share-sidebar {
            display: block;
          }
        }
        .blog-content h2 {
          color: var(--color-primary);
          font-size: clamp(1.25rem, 3vw, 1.8rem);
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        .blog-content ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          list-style: disc;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
          color: #555;
        }
        .blog-content blockquote {
          border-left: 4px solid var(--color-secondary);
          padding: 1.25rem 1.5rem;
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-style: italic;
          color: var(--color-primary);
          margin: 2rem 0;
          background: rgba(57, 211, 83, 0.05);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }
      `}</style>
    </article>
  );
}
