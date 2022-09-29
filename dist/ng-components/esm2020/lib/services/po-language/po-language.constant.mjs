/**
 * @description
 *
 * <a id="poLanguageDefault"></a>
 *
 *
 * A constante poLanguageDefault possui as linguagens de suporte padrão do Po-UI
 *
 * > Português, Inglês, Espanhol e Russo.
 *
 * @usedBy PoI18nModule
 */
export const poLanguageDefault = [
    { description: 'English', language: 'en' },
    { description: 'Español', language: 'es' },
    { description: 'Português', language: 'pt' },
    { description: 'Pусский', language: 'ru' }
];
/**
 * @description
 *
 * <a id="poLocales"></a>
 *
 *
 * A constante poLocales possui somente os códigos das linguagem padrão
 *
 * @usedBy PoI18nModule
 */
export const poLocales = poLanguageDefault.map(language => language.language);
/**
 * @description
 *
 * <a id="poLocaleDefault"></a>
 *
 *
 * A constante poLocaleDefault possui o código da linguagem padrão do Po-UI
 *
 * @usedBy PoI18nModule
 */
export const poLocaleDefault = 'pt';
/**
 * @description
 *
 * <a id="poLocaleDecimalSeparatorList"></a>
 *
 *
 * A constante poLocaleDecimalSeparatorList possui os separadores de decimal por linguagens de suporte padrão do Po-UI
 *
 * @usedBy PoI18nModule
 */
export const poLocaleDecimalSeparatorList = [
    { separator: '.', language: 'en' },
    { separator: ',', language: 'es' },
    { separator: ',', language: 'pt' },
    { separator: ',', language: 'ru' }
];
/**
 * @description
 *
 * <a id="poLocaleDecimalSeparatorList"></a>
 *
 *
 * A constante poLocaleDecimalSeparatorList possui os separadores de decimal por linguagens de suporte padrão do Po-UI
 *
 * @usedBy PoI18nModule
 */
export const poLocaleThousandSeparatorList = [
    { separator: ',', language: 'en' },
    { separator: '.', language: 'es' },
    { separator: '.', language: 'pt' },
    { separator: ' ', language: 'ru' }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbGFuZ3VhZ2UuY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLmNvbnN0YW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQXNCO0lBQ2xELEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzFDLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzVDLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQzNDLENBQUM7QUFFRjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTlFOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFFcEM7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQTZCO0lBQ3BFLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ2xDLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ2xDLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ2xDLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQ25DLENBQUM7QUFFRjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBNkI7SUFDckUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDbEMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDbEMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDbEMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvTGFuZ3VhZ2UsIFBvTnVtYmVyU2VwYXJhdG9yIH0gZnJvbSAnLi9wby1sYW5ndWFnZS5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiA8YSBpZD1cInBvTGFuZ3VhZ2VEZWZhdWx0XCI+PC9hPlxyXG4gKlxyXG4gKlxyXG4gKiBBIGNvbnN0YW50ZSBwb0xhbmd1YWdlRGVmYXVsdCBwb3NzdWkgYXMgbGluZ3VhZ2VucyBkZSBzdXBvcnRlIHBhZHLDo28gZG8gUG8tVUlcclxuICpcclxuICogPiBQb3J0dWd1w6pzLCBJbmdsw6pzLCBFc3BhbmhvbCBlIFJ1c3NvLlxyXG4gKlxyXG4gKiBAdXNlZEJ5IFBvSTE4bk1vZHVsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBvTGFuZ3VhZ2VEZWZhdWx0OiBBcnJheTxQb0xhbmd1YWdlPiA9IFtcclxuICB7IGRlc2NyaXB0aW9uOiAnRW5nbGlzaCcsIGxhbmd1YWdlOiAnZW4nIH0sXHJcbiAgeyBkZXNjcmlwdGlvbjogJ0VzcGHDsW9sJywgbGFuZ3VhZ2U6ICdlcycgfSxcclxuICB7IGRlc2NyaXB0aW9uOiAnUG9ydHVndcOqcycsIGxhbmd1YWdlOiAncHQnIH0sXHJcbiAgeyBkZXNjcmlwdGlvbjogJ1DRg9GB0YHQutC40LknLCBsYW5ndWFnZTogJ3J1JyB9XHJcbl07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIDxhIGlkPVwicG9Mb2NhbGVzXCI+PC9hPlxyXG4gKlxyXG4gKlxyXG4gKiBBIGNvbnN0YW50ZSBwb0xvY2FsZXMgcG9zc3VpIHNvbWVudGUgb3MgY8OzZGlnb3MgZGFzIGxpbmd1YWdlbSBwYWRyw6NvXHJcbiAqXHJcbiAqIEB1c2VkQnkgUG9JMThuTW9kdWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcG9Mb2NhbGVzID0gcG9MYW5ndWFnZURlZmF1bHQubWFwKGxhbmd1YWdlID0+IGxhbmd1YWdlLmxhbmd1YWdlKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogPGEgaWQ9XCJwb0xvY2FsZURlZmF1bHRcIj48L2E+XHJcbiAqXHJcbiAqXHJcbiAqIEEgY29uc3RhbnRlIHBvTG9jYWxlRGVmYXVsdCBwb3NzdWkgbyBjw7NkaWdvIGRhIGxpbmd1YWdlbSBwYWRyw6NvIGRvIFBvLVVJXHJcbiAqXHJcbiAqIEB1c2VkQnkgUG9JMThuTW9kdWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcG9Mb2NhbGVEZWZhdWx0ID0gJ3B0JztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogPGEgaWQ9XCJwb0xvY2FsZURlY2ltYWxTZXBhcmF0b3JMaXN0XCI+PC9hPlxyXG4gKlxyXG4gKlxyXG4gKiBBIGNvbnN0YW50ZSBwb0xvY2FsZURlY2ltYWxTZXBhcmF0b3JMaXN0IHBvc3N1aSBvcyBzZXBhcmFkb3JlcyBkZSBkZWNpbWFsIHBvciBsaW5ndWFnZW5zIGRlIHN1cG9ydGUgcGFkcsOjbyBkbyBQby1VSVxyXG4gKlxyXG4gKiBAdXNlZEJ5IFBvSTE4bk1vZHVsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBvTG9jYWxlRGVjaW1hbFNlcGFyYXRvckxpc3Q6IEFycmF5PFBvTnVtYmVyU2VwYXJhdG9yPiA9IFtcclxuICB7IHNlcGFyYXRvcjogJy4nLCBsYW5ndWFnZTogJ2VuJyB9LFxyXG4gIHsgc2VwYXJhdG9yOiAnLCcsIGxhbmd1YWdlOiAnZXMnIH0sXHJcbiAgeyBzZXBhcmF0b3I6ICcsJywgbGFuZ3VhZ2U6ICdwdCcgfSxcclxuICB7IHNlcGFyYXRvcjogJywnLCBsYW5ndWFnZTogJ3J1JyB9XHJcbl07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIDxhIGlkPVwicG9Mb2NhbGVEZWNpbWFsU2VwYXJhdG9yTGlzdFwiPjwvYT5cclxuICpcclxuICpcclxuICogQSBjb25zdGFudGUgcG9Mb2NhbGVEZWNpbWFsU2VwYXJhdG9yTGlzdCBwb3NzdWkgb3Mgc2VwYXJhZG9yZXMgZGUgZGVjaW1hbCBwb3IgbGluZ3VhZ2VucyBkZSBzdXBvcnRlIHBhZHLDo28gZG8gUG8tVUlcclxuICpcclxuICogQHVzZWRCeSBQb0kxOG5Nb2R1bGVcclxuICovXHJcbmV4cG9ydCBjb25zdCBwb0xvY2FsZVRob3VzYW5kU2VwYXJhdG9yTGlzdDogQXJyYXk8UG9OdW1iZXJTZXBhcmF0b3I+ID0gW1xyXG4gIHsgc2VwYXJhdG9yOiAnLCcsIGxhbmd1YWdlOiAnZW4nIH0sXHJcbiAgeyBzZXBhcmF0b3I6ICcuJywgbGFuZ3VhZ2U6ICdlcycgfSxcclxuICB7IHNlcGFyYXRvcjogJy4nLCBsYW5ndWFnZTogJ3B0JyB9LFxyXG4gIHsgc2VwYXJhdG9yOiAnICcsIGxhbmd1YWdlOiAncnUnIH1cclxuXTtcclxuIl19