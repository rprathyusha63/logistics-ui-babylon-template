import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Product} from '../domain/product';
import {ProductService} from '../service/productservice';
import {BreadcrumbService} from '../../app.breadcrumb.service';

@Component({
    templateUrl: './overlaysdemo.component.html',
    providers: [ConfirmationService, MessageService]
})
export class OverlaysDemoComponent implements OnInit {

    images: any[];

    display: boolean;

    products: Product[];

    selectedProduct: Product;

    visibleSidebar1;

    visibleSidebar2;

    visibleSidebar3;

    visibleSidebar4;

    visibleSidebar5;

    constructor(private productService: ProductService, private confirmationService: ConfirmationService,
                private messageService: MessageService, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'UI Kit'},
            {label: 'Overlay'}
        ]);
    }

    ngOnInit() {
        this.productService.getProductsSmall().then(products => this.products = products);

        this.images = [];
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos1.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg', title: 'Sopranos 1'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos2.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg', title: 'Sopranos 2'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos3.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg', title: 'Sopranos 3'
        });
        this.images.push({
            source: 'assets/demo/images/sopranos/sopranos4.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg', title: 'Sopranos 4'
        });
    }

    confirm1() {
        this.confirmationService.confirm({
            key: 'confirm1',
            message: 'Are you sure to perform this action?'
        });
    }

    confirm2(event: Event) {
        this.confirmationService.confirm({
            key: 'confirm2',
            target: event.target,
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted'});
            },
            reject: () => {
                this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected'});
            }
        });
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }
}