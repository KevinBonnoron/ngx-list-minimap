import { DOCUMENT, KeyValuePipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { groupBy, isFunction } from 'monadojs';

@Component({
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule, NgFor, NgIf, NgTemplateOutlet, KeyValuePipe],
  selector: 'ngx-list-minimap',
  templateUrl: './ngx-list-minimap.component.html',
  styleUrls: ['./ngx-list-minimap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxListMinimapComponent<T> implements OnChanges {
  private readonly document = inject(DOCUMENT);

  @Input()
  elements!: T[];

  @Input()
  groupBy!: ((element: T) => string) | (keyof T);

  @ContentChild('listTemplate')
  listTemplate!: TemplateRef<unknown>;

  @ContentChild('groupTemplate')
  groupTemplate!: TemplateRef<unknown>;

  @ContentChild('minimapTemplate')
  minimapTemplate!: TemplateRef<unknown>;

  @ContentChild('componentTemplate')
  componentTemplate!: TemplateRef<unknown>;

  readonly elementGroups = signal<Record<string, T[]>>({});

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['elements'] || changes['groupBy']) {
      let groupByFn = this.groupBy;
      if (!isFunction(groupByFn)) {
        groupByFn = (element: T) => element[this.groupBy as unknown as keyof T] as string;
      }

      this.elementGroups.set(groupBy(groupByFn)(this.elements));
    }
  }

  scrollToAnchor(anchor: string) {
    this.document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
