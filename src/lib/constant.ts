import {
    LayoutDashboard,
    RefreshCw,
    NotepadText,
    BriefcaseBusiness,
    Cuboid,
    FileQuestion,
    Newspaper,
    MessageCircleQuestion,
    Cog,
    Tv,
    ShoppingBasket,
    NotebookPen,
    UserPen,
    BookCheck,
    Package,
    Settings,
  } from "lucide-react";

export const navItems = [

    { name: "Dashboard", href: "/new", icon: LayoutDashboard },
    { name: "Article", href: "/article", icon: Newspaper },
    { name: "Auto dealership", href: "/auto-dealership", icon: RefreshCw },
    {
      name: "Blog",
      href: "/customers",
      icon: NotepadText,
      child: [
        { name: "Blog Category", href: "/dsdf", icon: RefreshCw },
        { name: "Blog Page", href: "/dsfsdds", icon: RefreshCw },
        { name: "Blog", href: "/dsdf", icon: RefreshCw },
      ],
    },
    {
      name: "Career",
      href: "/analytics",
      icon: BriefcaseBusiness,
      child: [
        { name: "Career", href: "/dsdf", icon: BriefcaseBusiness },
        { name: "Career Openings", href: "/dsfsdds", icon: BriefcaseBusiness },
        {
          name: "Career Openings Category",
          href: "/dsdf",
          icon: BriefcaseBusiness,
        },
      ],
    },
    { name: "Country,State,City", href: "/settings", icon: Cuboid },
    { name: "FAQ's", href: "/auto-dealership", icon: FileQuestion },
    {
      name: "Free shop news",
      href: "/customers",
      icon: Newspaper,
      child: [
        { name: "Free Shop News Category", href: "/dsfsdds", icon: Newspaper },
        {
          name: "Free Shop News",
          href: "/dsdf",
          icon: Newspaper,
        },
      ],
    },
    {
      name: "Help Center",
      href: "/analytics",
      icon: MessageCircleQuestion,
      child: [
        { name: "Category", href: "/dsfsdds", icon: MessageCircleQuestion },
        {
          name: "Help Center Knowladge Base",
          href: "/dsdf",
          icon: Newspaper,
        },
      ],
    },
    {
      name: "How it works",
      href: "/how-it",
      icon: Cog,
      child: [
        {
          name: "Add How It Works",
          href: "/dsdf",
          icon: Cog,
        },
        {
          name: "add Buttom Data In HIW",
          href: "/dsdf",
          icon: Cog,
        },
      ],
    },
    {
      name: "Jobs",
      href: "/dashboard",
      icon: LayoutDashboard,
      child: [
        {
          name: "Sarvice Category",
          href: "/dsdf",
          icon: LayoutDashboard,
        },
        {
          name: "Jobs",
          href: "/dsdf",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      name: "Press",
      href: "/artcicle",
      icon: Tv,
      child: [
        {
          name: "Press New Category",
          href: "/dsdf",
          icon: Tv,
        },
        {
          name: "Press Topic",
          href: "/dsdf",
          icon: Tv,
        },
        {
          name: "Press News",
          href: "/dsdf",
          icon: Tv,
        },
        {
          name: "Press Offer Up News",
          href: "/dsdf",
          icon: Tv,
        },
        {
          name: "Press",
          href: "/dsdf",
          icon: Tv,
        },
      ],
    },
    {
      name: "Product",
      href: "/auto-dealership",
      icon: ShoppingBasket,
      child: [
        {
          name: "Category",
          href: "/dsdf",
          icon: ShoppingBasket,
        },
        {
          name: "Sub-Category",
          href: "/dsdf",
          icon: ShoppingBasket,
        },
        {
          name: "Conditions",
          href: "/dsdf",
          icon: Newspaper,
        },
        {
          name: "Product",
          href: "/dsdf",
          icon: LayoutDashboard,
        },
        {
          name: "Brand",
          href: "/dsdf",
          icon: LayoutDashboard,
        },
        {
          name: "Model",
          href: "/dsdf",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      name: "Privacy & Terms",
      href: "/customers",
      icon: NotebookPen,
      
    },
    { name: "Trust & safety", href: "/analytics",icon:BookCheck ,child: [
      {
        name: "Add",
        href: "/dsdf",
        icon: NotebookPen,
      },
      {
        name: "Add Bottom Data",
        href: "/dsdf",
        icon: LayoutDashboard,
      },
      {
        name: "List",
        href: "/dsdf",
        icon: NotebookPen,
      },
    ], },
    { name: "User Management", href: "/user-management", icon: UserPen },
    { name: "Order", href: "/auto-dealership", icon: Package  },
    { name: "Settings", href: "/customers",icon:Settings   },
  ];