'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { Spirit } from '@/lib/data';

type PortfolioClientProps = {
  spirits: Spirit[];
  categories: string[];
  brands: string[];
};

export default function PortfolioClient({ spirits, categories, brands }: PortfolioClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  
  const filteredSpirits = useMemo(() => {
    return spirits.filter((spirit) => {
      const categoryMatch = selectedCategory === 'all' || spirit.category === selectedCategory;
      const brandMatch = selectedBrand === 'all' || spirit.brand === selectedBrand;
      return categoryMatch && brandMatch;
    });
  }, [spirits, selectedCategory, selectedBrand]);

  return (
    <div>
      <div className="bg-secondary/50 rounded-lg p-6 mb-8 border border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-headline text-lg font-semibold text-foreground">Filtrar Destilados</h3>
          {(selectedCategory !== 'all' || selectedBrand !== 'all') && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
              }}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Limpiar filtros
            </Button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">Categoría</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full bg-card border-border/50 hover:border-border transition-colors">
                <SelectValue placeholder="Filtrar por categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las Categorías</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-muted-foreground">Marca</label>
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-full bg-card border-border/50 hover:border-border transition-colors">
                <SelectValue placeholder="Filtrar por marca" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las Marcas</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          Mostrando <span className="font-semibold text-foreground">{filteredSpirits.length}</span> de {spirits.length} destilados
        </p>
      </div>

      {filteredSpirits.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSpirits.map((spirit) => (
            <Dialog key={spirit.id}>
              <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border-border/50 hover:border-border bg-card/50 hover:bg-card">
                <CardHeader className="p-0 relative h-80 overflow-hidden">
                  <Image
                    src={spirit.imageUrl}
                    alt={`Botella de ${spirit.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="spirit bottle"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardHeader>
                <CardContent className="p-4 flex-grow space-y-2">
                  <p className="text-sm text-primary font-semibold tracking-wide">{spirit.brand}</p>
                  <CardTitle className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-200">{spirit.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{spirit.category} • {spirit.origin}</p>
                  {(spirit.alcoholVolume || spirit.presentation) && (
                    <p className="text-xs text-muted-foreground border-t border-border/30 pt-2 mt-3">
                      {spirit.alcoholVolume && <span className="bg-secondary/50 px-2 py-1 rounded text-xs">{spirit.alcoholVolume} Alc.</span>}
                      {spirit.alcoholVolume && spirit.presentation && ' '}
                      {spirit.presentation && <span className="bg-secondary/50 px-2 py-1 rounded text-xs">{spirit.presentation}</span>}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200">
                        Ver Detalles
                      </Button>
                    </DialogTrigger>
                </CardFooter>
              </Card>
               <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                <DialogHeader className="pb-4 border-b border-border/50">
                   <DialogTitle className="font-headline text-2xl md:text-3xl font-bold text-foreground pr-8">{spirit.name}</DialogTitle>
                  <DialogDescription className="text-primary font-semibold text-base pt-2">{spirit.brand}</DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-8 py-6">
                  <div className="relative h-96 w-full rounded-lg overflow-hidden bg-secondary/20">
                     <Image
                      src={spirit.imageUrl}
                      alt={`Botella de ${spirit.name}`}
                      fill
                      className="object-contain"
                      data-ai-hint="spirit bottle product"
                    />
                  </div>
                  <div className="flex flex-col justify-start space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Categoría</p>
                        <p className="text-sm font-semibold text-foreground">{spirit.category}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Origen</p>
                        <p className="text-sm font-semibold text-foreground">{spirit.origin}</p>
                      </div>
                      {spirit.alcoholVolume && (
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Alcohol</p>
                          <p className="text-sm font-semibold text-foreground">{spirit.alcoholVolume}</p>
                        </div>
                      )}
                      {spirit.presentation && (
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Presentación</p>
                          <p className="text-sm font-semibold text-foreground">{spirit.presentation}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t border-border/50 pt-6">
                      <h4 className="font-headline text-lg font-semibold text-foreground mb-3">Notas de Cata</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{spirit.tastingNotes}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-2">No se encontraron destilados</h3>
            <p className="text-muted-foreground mb-4">
              No hay productos que coincidan con los filtros seleccionados. Prueba ajustando tus criterios de búsqueda.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
              }}
              className="text-sm"
            >
              Ver todos los destilados
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
