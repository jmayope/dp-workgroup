import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform<T>(
    items: T[] | null | undefined,
    searchText: string | number | boolean | object | null | undefined,
    strict?: boolean
  ): T[] {
    
    // Validaciones iniciales
    if (!items || !Array.isArray(items)) {
      return [];
    }

    if (searchText === null || searchText === undefined || searchText === '') {
      return items;
    }

    // Normalizar el término de búsqueda
    const normalizedSearchText = this.normalizeSearchText(searchText);
    
    return items.filter(item => 
      this.matchesFilter(item, normalizedSearchText, strict || false)
    );
  }

  private normalizeSearchText(searchText: any): any {
    if (typeof searchText === 'string') {
      return searchText.toLowerCase().trim();
    }
    return searchText;
  }

  private matchesFilter(item: any, searchText: any, strict: boolean): boolean {
    // Si el término de búsqueda es un objeto, filtrar por propiedades específicas
    if (typeof searchText === 'object' && searchText !== null) {
      return this.matchesObjectFilter(item, searchText, strict);
    }

    // Si el término de búsqueda es primitivo, buscar en todas las propiedades
    return this.matchesPrimitiveFilter(item, searchText, strict);
  }

  private matchesObjectFilter(item: any, searchObj: any, strict: boolean): boolean {
    // Iterar sobre cada propiedad del objeto de búsqueda
    for (const key in searchObj) {
      if (searchObj.hasOwnProperty(key)) {
        const searchValue = searchObj[key];
        const itemValue = this.getNestedProperty(item, key);

        if (!this.compareValues(itemValue, searchValue, strict)) {
          return false;
        }
      }
    }
    return true;
  }

  private matchesPrimitiveFilter(item: any, searchText: any, strict: boolean): boolean {
    // Convertir el item a string para búsqueda general
    const itemString = this.objectToSearchableString(item);
    
    if (typeof searchText === 'string') {
      return strict 
        ? itemString.includes(searchText)
        : itemString.toLowerCase().includes(searchText.toLowerCase());
    }

    // Para búsquedas por número o boolean
    return itemString.includes(String(searchText));
  }

  private compareValues(itemValue: any, searchValue: any, strict: boolean): boolean {
    // Manejar valores null/undefined
    if (itemValue === null || itemValue === undefined) {
      return searchValue === null || searchValue === undefined;
    }

    if (searchValue === null || searchValue === undefined) {
      return itemValue === null || itemValue === undefined;
    }

    // Comparación exacta para strict mode
    if (strict) {
      return itemValue === searchValue;
    }

    // Comparación flexible
    const itemStr = String(itemValue).toLowerCase();
    const searchStr = String(searchValue).toLowerCase();

    // Si el valor de búsqueda contiene wildcards o es una expresión regular
    if (typeof searchValue === 'string' && searchValue.startsWith('!')) {
      // Negación: !valor
      const negatedValue = searchValue.substring(1).toLowerCase();
      return !itemStr.includes(negatedValue);
    }

    // Búsqueda por coincidencia parcial (comportamiento por defecto de AngularJS)
    return itemStr.includes(searchStr);
  }

  private getNestedProperty(obj: any, path: string): any {
    // Soporte para propiedades anidadas usando notación de punto
    return path.split('.').reduce((current, prop) => {
      return current && current[prop] !== undefined ? current[prop] : undefined;
    }, obj);
  }

  private objectToSearchableString(obj: any, visited = new WeakSet()): string {
    // Prevenir referencia circular
    if (typeof obj === 'object' && obj !== null) {
      if (visited.has(obj)) {
        return '[Circular]';
      }
      visited.add(obj);
    }

    if (obj === null || obj === undefined) {
      return '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
      return String(obj);
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.objectToSearchableString(item, visited)).join(' ');
    }

    if (typeof obj === 'object') {
      return Object.values(obj)
        .map(value => this.objectToSearchableString(value, visited))
        .join(' ');
    }

    return String(obj);
  }

}
