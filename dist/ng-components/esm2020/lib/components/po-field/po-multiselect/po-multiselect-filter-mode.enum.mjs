/**
 * @usedBy PoMultiselectComponent
 *
 * @description
 *
 * Define o tipo de busca usado no po-multiselect.
 */
export var PoMultiselectFilterMode;
(function (PoMultiselectFilterMode) {
    /** Verifica se o texto *inicia* com o valor pesquisado. */
    PoMultiselectFilterMode[PoMultiselectFilterMode["startsWith"] = 0] = "startsWith";
    /** Verifica se o texto *contém* o valor pesquisado. */
    PoMultiselectFilterMode[PoMultiselectFilterMode["contains"] = 1] = "contains";
    /** Verifica se o texto *finaliza* com o valor pesquisado. */
    PoMultiselectFilterMode[PoMultiselectFilterMode["endsWith"] = 2] = "endsWith";
})(PoMultiselectFilterMode || (PoMultiselectFilterMode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbXVsdGlzZWxlY3QtZmlsdGVyLW1vZGUuZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1tdWx0aXNlbGVjdC9wby1tdWx0aXNlbGVjdC1maWx0ZXItbW9kZS5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNILE1BQU0sQ0FBTixJQUFZLHVCQU9YO0FBUEQsV0FBWSx1QkFBdUI7SUFDakMsMkRBQTJEO0lBQzNELGlGQUFVLENBQUE7SUFDVix1REFBdUQ7SUFDdkQsNkVBQVEsQ0FBQTtJQUNSLDZEQUE2RDtJQUM3RCw2RUFBUSxDQUFBO0FBQ1YsQ0FBQyxFQVBXLHVCQUF1QixLQUF2Qix1QkFBdUIsUUFPbEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHVzZWRCeSBQb011bHRpc2VsZWN0Q29tcG9uZW50XHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBEZWZpbmUgbyB0aXBvIGRlIGJ1c2NhIHVzYWRvIG5vIHBvLW11bHRpc2VsZWN0LlxyXG4gKi9cclxuZXhwb3J0IGVudW0gUG9NdWx0aXNlbGVjdEZpbHRlck1vZGUge1xyXG4gIC8qKiBWZXJpZmljYSBzZSBvIHRleHRvICppbmljaWEqIGNvbSBvIHZhbG9yIHBlc3F1aXNhZG8uICovXHJcbiAgc3RhcnRzV2l0aCxcclxuICAvKiogVmVyaWZpY2Egc2UgbyB0ZXh0byAqY29udMOpbSogbyB2YWxvciBwZXNxdWlzYWRvLiAqL1xyXG4gIGNvbnRhaW5zLFxyXG4gIC8qKiBWZXJpZmljYSBzZSBvIHRleHRvICpmaW5hbGl6YSogY29tIG8gdmFsb3IgcGVzcXVpc2Fkby4gKi9cclxuICBlbmRzV2l0aFxyXG59XHJcbiJdfQ==