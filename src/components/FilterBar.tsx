import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Category } from '../types';

interface FilterBarProps {
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  selectedSort: 'Recent' | 'Popular' | 'Alphabetical';
  setSelectedSort: (sort: 'Recent' | 'Popular' | 'Alphabetical') => void;
  selectedPricing: 'All' | 'Free' | 'Pro';
  setSelectedPricing: (pricing: 'All' | 'Free' | 'Pro') => void;
  totalResults: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
  selectedPricing,
  setSelectedPricing,
  totalResults,
}) => {
  const [sortOpen, setSortOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);

  const categories: Category[] = ['All', 'Popular', 'Apps', 'Sections'];

  return (
    <div className="w-full px-4 sm:px-8 mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Category Pills Slider */}
        <div className="relative min-w-0 max-w-full overflow-x-auto no-scrollbar py-1">
          <div
            className="inline-flex items-center p-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md"
            style={{ scrollbarWidth: 'none' }}
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`relative px-5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                    active
                      ? 'bg-[#202020] text-white border-t border-white/20 border-x border-b border-white/10 shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dropdowns (Sort & Pricing) + Result Counter */}
        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-auto">
          <span className="hidden md:inline text-xs text-white/40 mr-1">
            {totalResults} {totalResults === 1 ? 'prompt' : 'prompts'}
          </span>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setSortOpen(!sortOpen);
                setPricingOpen(false);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full border border-white/10 bg-[#202020] text-white/80 hover:text-white hover:border-white/20 transition-all whitespace-nowrap"
            >
              <span>{selectedSort}</span>
              <ChevronDown className="w-3.5 h-3.5 text-white/50" />
            </button>

            {sortOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-white/10 bg-[#1c1c1c] p-1.5 shadow-2xl z-30">
                {(['Recent', 'Popular', 'Alphabetical'] as const).map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedSort(option);
                      setSortOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs text-left rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <span>{option}</span>
                    {selectedSort === option && <Check className="w-3.5 h-3.5 text-purple-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setPricingOpen(!pricingOpen);
                setSortOpen(false);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full border border-white/10 bg-[#202020] text-white/80 hover:text-white hover:border-white/20 transition-all whitespace-nowrap"
            >
              <span>{selectedPricing === 'All' ? 'Pricing' : selectedPricing}</span>
              <ChevronDown className="w-3.5 h-3.5 text-white/50" />
            </button>

            {pricingOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-2xl border border-white/10 bg-[#1c1c1c] p-1.5 shadow-2xl z-30">
                {(['All', 'Free', 'Pro'] as const).map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedPricing(option);
                      setPricingOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs text-left rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <span>{option === 'All' ? 'All Tiers' : option}</span>
                    {selectedPricing === option && (
                      <Check className="w-3.5 h-3.5 text-purple-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
