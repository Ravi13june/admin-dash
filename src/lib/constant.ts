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

    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Article", href: "/article", icon: Newspaper },
    { name: "Auto dealership", href: "/auto-dealership", icon: RefreshCw },
    {
      name: "Blog",
      href: "/blog",
      icon: NotepadText,
      child: [
        { name: "Blog Category", href: "/blog/dsdf", icon: RefreshCw },
        { name: "Blog Page", href: "/blog/dsfsdds", icon: RefreshCw },
        { name: "Blog", href: "/blog/dsdf", icon: RefreshCw },
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
    { name: "FAQ's", href: "test-1", icon: FileQuestion },
    {
      name: "Free shop news",
      href: "/free-shop-news",
      icon: Newspaper,
      child: [
        { name: "Free Shop News Category", href: "/free-shop-news/news", icon: Newspaper },
        {
          name: "Free Shop News",
          href: "/free-shop-news/news24",
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
          href: "/analytics/dsdf",
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
          href: "/how-it/dsdf",
          icon: Cog,
        },
        {
          name: "add Buttom Data In HIW",
          href: "/how-it/dsdf",
          icon: Cog,
        },
      ],
    },
    {
      name: "Jobs",
      href: "/jobs",
      icon: LayoutDashboard,
      child: [
        {
          name: "Sarvice Category",
          href: "/jobs/sarvice",
          icon: LayoutDashboard,
        },
        {
          name: "Jobs",
          href: "/jobs/job",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      name: "Press",
      href: "/press",
      icon: Tv,
      child: [
        {
          name: "Press News Category",
          href: "/press/news-category",
          icon: Tv,
        },
        {
          name: "Press Topic",
          href: "/press/press-topic",
          icon: Tv,
        },
        {
          name: "Press News",
          href: "/press/news",
          icon: Tv,
        },
        {
          name: "Press Offer Up News",
          href: "/press/offer",
          icon: Tv,
        },
        {
          name: "Press",
          href: "/press/press",
          icon: Tv,
        },
      ],
    },
    {
      name: "Product",
      href: "/product",
      icon: ShoppingBasket,
      child: [
        {
          name: "Category",
          href: "/dsdf",
          icon: ShoppingBasket,
        },
        {
          name: "Sub-Category",
          href: "/product/sub-category",
          icon: ShoppingBasket,
        },
        {
          name: "Conditions",
          href: "/product/conditions",
          icon: Newspaper,
        },
        {
          name: "Product",
          href: "/product/pro",
          icon: LayoutDashboard,
        },
        {
          name: "Brand",
          href: "/product/Brand",
          icon: LayoutDashboard,
        },
        {
          name: "Model",
          href: "/product/brand",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      name: "Privacy & Terms",
      href: "/privacy-terms",
      icon: NotebookPen,
      
    },
    { name: "Trust & safety", href: "/trust",icon:BookCheck ,child: [
      {
        name: "Add",
        href: "/trust/add",
        icon: NotebookPen,
      },
      {
        name: "Add Bottom Data",
        href: "/trust/add-bottom-data",
        icon: LayoutDashboard,
      },
      {
        name: "List",
        href: "/trust/list",
        icon: NotebookPen,
      },
    ], },
    { name: "User Management", href: "/user-management", icon: UserPen },
    { name: "Order", href: "/test-3", icon: Package  },
    { name: "Settings", href: "/settings",icon:Settings   },
  ];