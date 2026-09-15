'use client';

import BubbleMenu from './BubbleMenu';

export default function Navbar() {
  const spaMenuItems = [
    {
      label: 'Home',
      href: '/',
      ariaLabel: 'Home Sanctuary',
      rotation: -6,
      hoverStyles: { bgColor: '#d9bf77', textColor: '#1e2420' }
    },
    {
      label: 'About Us',
      href: '/about',
      ariaLabel: 'About Diosa Spa',
      rotation: 6,
      hoverStyles: { bgColor: '#4e6550', textColor: '#fbf9f6' }
    },
    {
      label: 'Therapy & Rituals',
      href: '/therapy',
      ariaLabel: 'Therapy & Rituals',
      rotation: -5,
      hoverStyles: { bgColor: '#b69c4a', textColor: '#1e2420' }
    },
    {
      label: 'Sanctuary Gallery',
      href: '/gallery',
      ariaLabel: 'Sanctuary Gallery',
      rotation: 5,
      hoverStyles: { bgColor: '#89a58b', textColor: '#1e2420' }
    },
    {
      label: 'Foot Reflexology',
      href: '/foot-reflexology',
      ariaLabel: 'Foot Reflexology & Franchise',
      rotation: -5,
      hoverStyles: { bgColor: '#d97706', textColor: '#1e2420' }
    },
    {
      label: 'Book Experience',
      href: '/booking',
      ariaLabel: 'Book Experience',
      rotation: 5,
      hoverStyles: { bgColor: '#d9bf77', textColor: '#1e2420' }
    },
    {
      label: 'Contact',
      href: '/contact',
      ariaLabel: 'Contact Concierge',
      rotation: -6,
      hoverStyles: { bgColor: '#4e6550', textColor: '#fbf9f6' }
    },
    {
      label: '✦ Switch Experience',
      href: '#',
      onClick: (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('diosa:open-gateway'));
        }
      },
      ariaLabel: 'Switch Experience (Bali Spa or Foot Reflexology)',
      rotation: 0,
      hoverStyles: { bgColor: '#d4af37', textColor: '#121412' }
    }
  ];

  return (
    <BubbleMenu
      items={spaMenuItems}
      useFixedPosition={true}
      menuBg="#1e2420"
      menuContentColor="#d9bf77"
      menuAriaLabel="Toggle navigation menu"
      animationEase="back.out(1.5)"
      animationDuration={0.45}
      staggerDelay={0.1}
    />
  );
}
