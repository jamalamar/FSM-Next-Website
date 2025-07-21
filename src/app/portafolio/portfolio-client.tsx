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
      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-secondary/50 rounded-lg">
        <div className="flex-1">
          <label className="block text-sm font-medium text-muted-foreground mb-1">Categoría</label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full bg-card">
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
        <div className="flex-1">
          <label className="block text-sm font-medium text-muted-foreground mb-1">Marca</label>
          <Select value={selectedBrand} onValueChange={setSelectedBrand}>
            <SelectTrigger className="w-full bg-card">
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

      {filteredSpirits.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSpirits.map((spirit) => (
            <Dialog key={spirit.id}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="p-0 relative h-80">
                  <Image
                    src={spirit.imageUrl}
                    alt={`Botella de ${spirit.name}`}
                    fill
                    className="object-cover"
                    data-ai-hint="spirit bottle"
                  />
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <p className="text-sm text-primary font-semibold">{spirit.brand}</p>
                  <CardTitle className="text-lg font-bold text-foreground mt-1">{spirit.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{spirit.category} • {spirit.origin}</p>
                  {(spirit.alcoholVolume || spirit.presentation) && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {spirit.alcoholVolume && <span>{spirit.alcoholVolume} Alc.</span>}
                      {spirit.alcoholVolume && spirit.presentation && ' • '}
                      {spirit.presentation && <span>{spirit.presentation}</span>}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">Ver Detalles</Button>
                    </DialogTrigger>
                </CardFooter>
              </Card>
               <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                   <DialogTitle className="font-headline text-2xl md:text-3xl font-bold text-foreground">{spirit.name}</DialogTitle>
                  <DialogDescription className="text-primary font-semibold pt-2">{spirit.brand}</DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  <div className="relative h-96 w-full rounded-lg overflow-hidden">
                     <Image
                      src={spirit.imageUrl}
                      alt={`Botella de ${spirit.name}`}
                      fill
                      className="object-contain"
                      data-ai-hint="spirit bottle product"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="prose prose-sm">
                      <p><strong>Categoría:</strong> {spirit.category}</p>
                      <p><strong>Origen:</strong> {spirit.origin}</p>
                      {spirit.alcoholVolume && <p><strong>Contenido de Alcohol:</strong> {spirit.alcoholVolume}</p>}
                      {spirit.presentation && <p><strong>Presentación:</strong> {spirit.presentation}</p>}
                      <h4 className="font-semibold text-foreground mt-4">Notas de Cata</h4>
                      <p className="text-sm leading-relaxed">{spirit.tastingNotes}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">No se encontraron destilados con los filtros seleccionados.</p>
        </div>
      )}
    </div>
  );
}
