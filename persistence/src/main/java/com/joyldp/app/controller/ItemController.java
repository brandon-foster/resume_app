package com.joyldp.app.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joyldp.app.model.ItemModel;

@RequestMapping("/api/item")
@RestController
public class ItemController {
    
    @GetMapping
    public List<ItemModel> getAll() {
        return Arrays.asList(
            new ItemModel("alpha"),
            new ItemModel("bravo"),
            new ItemModel("charlie")
        );
    }
    
    @PostMapping
    public ItemModel create(@RequestBody ItemModel itemModel) {
        return itemModel;
    }
    
}
