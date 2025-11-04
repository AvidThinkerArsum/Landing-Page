"use client";

import { useState } from "react";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Search } from "lucide-react";
import contentData from "@/data/content.json";

export default function ContentPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filterBySearch = (items: any[], query: string) => {
    if (!query) return items;
    return items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredVideos = filterBySearch(contentData.videos, searchQuery);
  const filteredArticles = filterBySearch(contentData.articles, searchQuery);
  const filteredBooks = filterBySearch(contentData.books, searchQuery);

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <Section>
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 text-center">
              Content & Learning
            </h1>
            <p className="text-xl text-foreground/70 text-center max-w-3xl mx-auto">
              Videos, writing, and book notes on AI, product, and engineering.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="writing">Product Writing</TabsTrigger>
              <TabsTrigger value="videos">YouTube Videos</TabsTrigger>
              <TabsTrigger value="books">Book Reviews</TabsTrigger>
            </TabsList>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video, index) => (
                  <a
                    key={index}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105">
                      <div className="relative h-48 bg-depth-2 overflow-hidden">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary/0 group-hover:bg-primary/90 flex items-center justify-center transition-all duration-300 scale-0 group-hover:scale-100">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg mb-2">{video.title}</CardTitle>
                        <CardDescription className="text-sm text-foreground/60 leading-relaxed">
                          {video.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </a>
                ))}
              </div>
              {filteredVideos.length === 0 && (
                <p className="text-center text-foreground/60 py-12">No videos found.</p>
              )}
            </TabsContent>

            {/* Writing Tab */}
            <TabsContent value="writing">
              <div className="space-y-6 max-w-3xl mx-auto">
                {filteredArticles.map((article, index) => (
                  <Card
                    key={index}
                    className="hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => window.open(article.url, "_blank")}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                      <CardDescription>
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70 mb-4">{article.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredArticles.length === 0 && (
                <p className="text-center text-foreground/60 py-12">No articles found.</p>
              )}
            </TabsContent>

            {/* Books Tab */}
            <TabsContent value="books">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-64 bg-gradient-to-br from-depth-2 to-depth-3 flex items-center justify-center p-8">
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-center leading-tight">
                        {book.title}
                      </h3>
                    </div>
                    <CardHeader>
                      <CardDescription>by {book.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-sm font-bold mb-2">Key Takeaways:</h4>
                      <ul className="space-y-2 text-sm text-foreground/70">
                        {book.takeaways.map((takeaway: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {takeaway}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredBooks.length === 0 && (
                <p className="text-center text-foreground/60 py-12">No books found.</p>
              )}
            </TabsContent>
          </Tabs>
        </Section>
      </div>
    </PageTransition>
  );
}
