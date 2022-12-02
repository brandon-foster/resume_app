package com.joyldp.app.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joyldp.app.entity.PurchaseEntity;
import com.joyldp.app.service.PurchaseService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/api/purchase")
@RestController
public class PurchaseController {
    
    private final PurchaseService purchaseService;

    public PurchaseController(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }

    @GetMapping
    public List<PurchaseEntity> getAll() {
        return purchaseService.getAll();
    }
    
    @PostMapping
    public PurchaseEntity postOne(@RequestBody PurchaseEntity purchaseEntity) {
        return purchaseService.createOne(purchaseEntity);
    }
    
    @PutMapping
    public PurchaseEntity putOne(@RequestBody PurchaseEntity purchaseEntity) {
        return purchaseService.updateOne(purchaseEntity);
    }

}
